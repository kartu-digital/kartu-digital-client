// context/AuthContext.tsx
"use client";
import { createContext, useState, useEffect, ReactNode, FC } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextProps {
    user: { email: string } | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{
        email: string;
        username: string;
        role: string;
        membership: string;
    } | null>(null);

    const router = useRouter();

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                { email, password },
                {
                    withCredentials: true,
                },
            );

            console.log("Login successful", response.data);
            await fetchUserProfile();
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

    const fetchUserProfile = async () => {
        console.log("masuk fetch profile");

        const response = await axios.get("http://localhost:8080/auth/profile", {
            withCredentials: true,
        });
        // console.log(``);
        console.log(response.data);
        setUser(response.data);
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
                await fetchUserProfile();
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.status === 401) {
                        try {
                            await axios.post(
                                "http://localhost:8080/auth/refresh",
                            );

                            await fetchUserProfile();
                        } catch (err) {
                            return err;
                        }
                    }
                }
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
