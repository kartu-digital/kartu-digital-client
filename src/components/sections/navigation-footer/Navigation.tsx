"use client";
import Link from "next/link";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });

interface NavigationProps {
    setIsOpen: (value: boolean) => void;
    isOpen: boolean;
}

export default function Navigation({
    setIsOpen,
    isOpen,
}: Readonly<NavigationProps>) {
    return (
        <nav className="relative z-50 mb-5 flex w-full justify-between lg:px-10 lg:py-8">
            {/* mobile nav start */}
            <div
                className={`${isOpen ? "bg-white" : ""} mobile-menu fixed mb-20 w-full duration-300 lg:hidden `}
            >
                <div
                    className={`${isOpen ? "" : "shadow-sm"} flex justify-between bg-white bg-opacity-40 px-3 py-3 backdrop-blur-sm `}
                >
                    <Link
                        href={"/"}
                        className="flex flex-nowrap items-center text-lg font-semibold md:text-xl"
                    >
                        <Image
                            src={"/svgs/logo.svg"}
                            alt="Logo"
                            width={100}
                            height={100}
                            className="mr-1 w-auto scale-90 pl-3"
                        />
                    </Link>
                    <div className="mr-3 flex gap-4">
                        <Link
                            href={"/register"}
                            className="border-neonGreen bg-neonGreen flex items-center rounded-[34px] border-2 px-3 py-1 text-sm font-semibold transition-all duration-300 hover:bg-transparent hover:text-lime-400 md:px-6 md:py-2 md:text-lg"
                        >
                            Get Started
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col items-center justify-center gap-1"
                        >
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-black 
                transition-all duration-300 ease-out ${
                    isOpen
                        ? "translate-y-[0.360rem] rotate-45"
                        : "-translate-y-0.5"
                }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-black 
                transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-black 
                    transition-all duration-300 ease-out ${
                        isOpen
                            ? "-translate-y-[0.360rem] -rotate-45"
                            : "translate-y-0.5"
                    }`}
                            ></span>
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`h-full w-full pt-3 lg:hidden`}
                        >
                            <div className="border-lightGray h-screen w-screen border-b-2">
                                <Button
                                    size={"mobile_nav"}
                                    variant={"mobile_navigation"}
                                    asChild
                                    className="font-normal"
                                >
                                    <Link href={"/"}>Home</Link>
                                </Button>
                                <Button
                                    size={"mobile_nav"}
                                    variant={"mobile_navigation"}
                                    asChild
                                    className=" font-normal"
                                >
                                    <Link href={"/templates"}>Templates</Link>
                                </Button>
                                <Button
                                    size={"mobile_nav"}
                                    variant={"mobile_navigation"}
                                    asChild
                                    className=" font-normal"
                                >
                                    <Link href={"/harga"}>Harga</Link>
                                </Button>
                                <Button
                                    size={"mobile_nav"}
                                    variant={"mobile_navigation"}
                                    asChild
                                    className=" font-normal"
                                >
                                    <Link href={"/produk"}>Produk</Link>
                                </Button>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem
                                        value="produk"
                                        className="border-none"
                                    >
                                        <AccordionTrigger className="hover:bg-lightGray justify-between px-4 py-3 text-base font-normal">
                                            Bantuan
                                        </AccordionTrigger>
                                        <AccordionContent className=" pl-3 text-Black500">
                                            <Button
                                                size={"mobile_nav"}
                                                variant={"mobile_navigation"}
                                                asChild
                                                className="font-normal"
                                            >
                                                <Link
                                                    href={
                                                        "https://panduan.kartudigital.com/"
                                                    }
                                                >
                                                    Panduan Pengguna
                                                </Link>
                                            </Button>
                                            <Button
                                                size={"mobile_nav"}
                                                variant={"mobile_navigation"}
                                                asChild
                                                className="font-normal"
                                            >
                                                <Link href={"/"}>
                                                    Customer Service
                                                </Link>
                                            </Button>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="z-50 w-screen py-10">
                                    <Link
                                        href={"/login"}
                                        className="mx-10 mb-4 flex items-center justify-center rounded-[34px] border-2 border-black px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={"/register"}
                                        className="mx-10 flex items-center justify-center rounded-[34px] border-2 border-lime-400 bg-lime-400 px-4 py-2 text-center transition-all duration-300 hover:bg-transparent hover:text-lime-400"
                                    >
                                        Mulai
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {/* mobile nav end */}
            {/* desktop nav start */}
            <Link
                href={"/"}
                className="hidden flex-nowrap items-center text-2xl font-semibold lg:flex"
            >
                <Image
                    src={"/svgs/logo.svg"}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="mr-2 w-auto xl:mr-4"
                />
                <span className={workSans.className}>Kartu Digital</span>
            </Link>
            <div className="relative hidden items-center lg:flex lg:gap-3">
                <Button
                    size={"desktop_nav"}
                    variant={"desktop_navigation"}
                    asChild
                >
                    <Link href={"/"}>Home</Link>
                </Button>
                <Button
                    size={"desktop_nav"}
                    variant={"desktop_navigation"}
                    asChild
                >
                    <Link href={"/templates"}>Templates</Link>
                </Button>
                <Button
                    size={"desktop_nav"}
                    variant={"desktop_navigation"}
                    asChild
                >
                    <Link href={"/harga"}>Harga</Link>
                </Button>
                <Button
                    size={"desktop_nav"}
                    variant={"desktop_navigation"}
                    asChild
                >
                    <Link href={"/produk"}>Produk</Link>
                </Button>
                <NavigationMenu>
                    <NavigationMenuItem className="list-none">
                        <NavigationMenuTrigger>Bantuan</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-2 bg-white p-4 md:grid-cols-1 lg:w-[250px]">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={
                                                "https://panduan.kartudigital.com"
                                            }
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                        >
                                            Panduan Pengguna
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={"/"}
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                        >
                                            Customer Service
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
            <div className="hidden gap-1 md:gap-3 lg:flex xl:gap-5">
                <Link
                    href={"/login"}
                    className="flex items-center rounded-[34px] border-2 border-black font-semibold transition-all duration-300 hover:bg-black hover:text-white lg:px-6 lg:py-2"
                >
                    Masuk
                </Link>
                <Link
                    href={"/register"}
                    className="flex items-center rounded-[34px] border-2 border-lime-400 bg-lime-400 font-semibold transition-all duration-300 hover:bg-transparent hover:text-lime-400 lg:px-6 lg:py-2"
                >
                    Daftar
                </Link>
            </div>
            {/* desktop nav end */}
        </nav>
    );
}
