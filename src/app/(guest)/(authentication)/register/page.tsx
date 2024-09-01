"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { useState, FormEvent, ChangeEvent } from "react";

import { Button } from "@/components/ui/button";

export default function Register() {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [check, setCheck] = useState(true);
    const [eye, setEye] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(value);
    };

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(!check);
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (check) {
            alert("Please check");
        } else {
            console.log(form);
            try {
                const response = await axios.post(
                    "http://192.168.18.5:8080/auth/register",
                    form,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        // withCredentials: true,
                    },
                );
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-Neutral400 font-poppins">
            <div className="min-h-screen w-full bg-white px-10 py-8 lg:w-2/3 lg:px-20 lg:py-16 2xl:w-5/12">
                <Link
                    className="mb-12 flex items-center space-x-2 font-workSans"
                    href={"/"}
                >
                    <Image
                        className="sm:hidden"
                        src="/svgs/logo.svg"
                        alt="kartu digital"
                        width={30}
                        height={20}
                    />
                    <Image
                        className="hidden sm:block"
                        src="/svgs/logo-color.svg"
                        alt="kartu digital"
                        width={50}
                        height={30}
                    />
                    <h1 className="text-xl font-semibold sm:text-2xl">
                        Kartu Digital
                    </h1>
                </Link>
                <h1 className="mb-2 text-2xl font-bold sm:mb-6 sm:text-5xl">
                    Buat Akun
                </h1>
                <h1 className="mb-6 text-2xl font-bold sm:mb-12 sm:text-5xl">
                    Kartu Digital Kamu!
                </h1>
                <form onSubmit={submitForm} className="font-semibold">
                    <div className="mb-2">
                        <label className="mb-2">Nama</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Masukkan nama Anda"
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl bg-Neutral400 px-4 py-3 font-medium focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="mb-2">Alamat Email</label>
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
                                        ? "/svgs/password-eye-closed.svg"
                                        : "/svgs/password-eye-open.svg"
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
                        <span>Setuju dengan</span>
                        <Link
                            href="#"
                            className="text-PurpleBlue hover:underline"
                        >
                            Ketentuan Layanan
                        </Link>
                        <span>&</span>
                        <Link
                            href="#"
                            className="text-PurpleBlue hover:underline"
                        >
                            Ketentuan Privasi
                        </Link>
                    </div>
                    <Button
                        variant="neon_green"
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
                    <label>Sudah mempunyai akun?</label>
                    <Link
                        className="text-PurpleBlue hover:underline"
                        href="/login"
                    >
                        Masuk di sini
                    </Link>
                </div>
            </div>
            <div className="hidden min-h-screen w-7/12 items-center justify-center lg:flex">
                <Image
                    src="/webp/register-splash-art.webp"
                    alt="Register Splash Art"
                    width={700}
                    height={0}
                />
            </div>
        </div>
    );
}
