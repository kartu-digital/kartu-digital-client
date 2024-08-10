// context/AuthContext.tsx
"use client";
import { createContext, useState, useEffect, ReactNode, FC } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextProps {
    status: "authenticated" | "loading" | "unauthenticated";
    user: {
        email: string;
        username: string;
        membership: string;
        role: string;
    } | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
    status: "loading",
    user: null,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{
        email: string;
        username: string;
        role: string;
        membership: string;
    } | null>(null);

    const [status, setStatus] = useState<
        "authenticated" | "loading" | "unauthenticated"
    >("loading");

    const router = useRouter();

    const login = async (email: string, password: string) => {
        try {
            await axios.post(
                "http://localhost:8080/auth/login",
                { email, password },
                {
                    withCredentials: true,
                },
            );

            const response = await axios.get(
                "http://localhost:8080/auth/profile",
                {
                    withCredentials: true,
                },
            );
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(
                    "Login failed:",
                    error.response?.data || error.message,
                );
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
        router.push("/dashboard");
    };

    const logout = async () => {
        try {
            await axios.post(
                "http://localhost:8080/auth/logout",
                {},
                { withCredentials: true },
            );
            setUser(null);
            router.push("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/auth/profile",
                    {
                        withCredentials: true,
                    },
                );
                console.log(response.data);
                setUser(response.data);
                setStatus("authenticated");
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.status === 401) {
                        try {
                            await axios.post(
                                "http://localhost:8080/auth/refresh",
                            );

                            const response = await axios.get(
                                "http://localhost:8080/auth/profile",
                                {
                                    withCredentials: true,
                                },
                            );
                            console.log(response.data);
                            setUser(response.data);
                            setStatus("authenticated");
                        } catch (err) {
                            setUser(null);
                            setStatus("unauthenticated");
                            return err;
                        }
                    }
                }
                setUser(null);
                setStatus("unauthenticated");
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ status, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
