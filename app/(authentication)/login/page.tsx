"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, FormEvent, ChangeEvent, useContext } from "react";
import AuthContext from "@/context/AuthContext";

import { Button } from "@/components/ui/button";

export default function Login() {
    const authContext = useContext(AuthContext);
    const [form, setForm] = useState({ email: "", password: "" });
    const [check, setCheck] = useState(true);
    const [eye, setEye] = useState(false);

    if (!authContext) {
        throw new Error("Auth Context must be use within an Auth Provider");
    }

    const { login } = authContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(!check);
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        await login(form.email, form.password);
    };

    return (
        <div className="flex min-h-screen w-full bg-Neutral400 font-poppins">
            <div className="min-h-screen w-full bg-white px-10 py-8 lg:w-2/3 lg:px-20 lg:py-16 2xl:w-5/12">
                <Link
                    className="mb-12 flex cursor-pointer items-center space-x-2 font-workSans"
                    href={"/"}
                >
                    <Image
                        className="sm:hidden"
                        src="/pngs/logo.png"
                        alt="Logo"
                        width={30}
                        height={20}
                    />
                    <Image
                        className="hidden sm:block"
                        src="/pngs/logo.png"
                        alt="Logo"
                        width={50}
                        height={30}
                    />
                    <h1 className="text-xl font-semibold sm:text-2xl">
                        Kartu Digital
                    </h1>
                </Link>
                <h1 className="mb-2 text-2xl font-bold sm:mb-6 sm:text-5xl">
                    Masuk Kembali ke
                </h1>
                <h1 className="mb-6 text-2xl font-bold sm:mb-12 sm:text-5xl">
                    Kartu Digital!
                </h1>
                <form onSubmit={submitForm} className="font-semibold">
                    <div className="mb-2">
                        <label className="mb-4">Alamat Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Masukkan email Anda"
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl bg-Neutral400 px-4 py-3 font-medium focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="mb-2">Password</label>
                        <div className="mt-2 flex items-center justify-end">
                            <input
                                type={eye ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Masukkan password Anda"
                                onChange={handleChange}
                                className="w-full rounded-2xl bg-Neutral400 px-4 py-3 font-medium focus:outline-none"
                            />
                            <Image
                                src={
                                    eye
                                        ? "/svgs/passwordEyeOpen.svg"
                                        : "/svgs/passwordEyeClosed.svg"
                                }
                                alt="eye"
                                width={20}
                                height={0}
                                onClick={() => setEye(!eye)}
                                className="absolute mx-4 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="mb-6 space-x-1 text-sm font-medium">
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            onChange={handleCheck}
                        />
                        <span>Remember Me</span>
                    </div>
                    <Button
                        variant={"neon_green"}
                        size="loginregister"
                        className="mb-6 flex w-full items-center justify-center space-x-4 py-3 font-semibold"
                        type="submit"
                    >
                        Masuk
                    </Button>
                </form>
                <div className="mb-6 flex items-center justify-center">
                    <hr className="flex-1 border-t-2 border-Neutral500" />
                    <span className="absolute bg-white px-2 text-sm">Atau</span>
                </div>
                <Button
                    variant="black_outline"
                    size="loginregister"
                    className="mb-6 flex w-full items-center justify-center space-x-4 py-3"
                >
                    <Image
                        src={"/svgs/google.svg"}
                        alt="Google Logo"
                        width={25}
                        height={0}
                    />
                    <span className="text-xs font-semibold sm:text-base">
                        Masuk dengan Akun Google
                    </span>
                </Button>
                <div className="flex items-center justify-center space-x-1 text-sm">
                    <label>Belum mempunyai akun?</label>
                    <Link
                        className="text-PurpleBlue hover:underline"
                        href="/register"
                    >
                        Daftar di sini
                    </Link>
                </div>
            </div>
            <div className="hidden min-h-screen w-7/12 items-center justify-center lg:flex">
                <Image
                    src="/pngs/LoginSplashArt.png"
                    alt="Login Splash Art"
                    width={700}
                    height={0}
                />
            </div>
        </div>
    );
}
