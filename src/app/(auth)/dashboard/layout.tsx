"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
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
import GradientButton from "@/components/GradientButton";

export default function Layout() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [showChildren, setShowChildren] = useState(false);

    const auth = useAuth();
    const handleClick = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <>
            {/* Desktop */}
            <div className="fixed hidden md:block">
                <nav className="item-center flex w-screen justify-between border border-r p-6">
                    <div className="flex min-w-52 items-center">
                        <div className="min-w-16">
                            <Button variant="ghost" onClick={handleClick}>
                                <Image
                                    src="/svgs/hamburgerMenu.svg"
                                    alt="hamburger"
                                    width={20}
                                    height={0}
                                />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/pngs/logo.png"
                                alt="Logo"
                                width={50}
                                height={0}
                            />
                            <h1 className="text-xl font-semibold sm:text-2xl">
                                Kartu Digital
                            </h1>
                        </div>
                    </div>
                    <div className="mx-12 flex flex-grow items-center">
                        <Image
                            src="/svgs/searchIcon.svg"
                            alt="search icon"
                            width={30}
                            height={0}
                            className="absolute ml-2"
                        />
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Cari file, template, kartu, semuanya. "
                            className="h-4/5 w-full rounded-full bg-Neutral400 pl-12 pr-4 focus:outline-none"
                        />
                    </div>
                    <GradientButton
                        size="buat situs"
                        text={"Buat Situs"}
                        isActive={true}
                    />
                    <NavigationMenu>
                        <NavigationMenuItem className="list-none">
                            <NavigationMenuTrigger>
                                <Image
                                    src="/svgs/notificationBell.svg"
                                    alt=""
                                    width={20}
                                    height={0}
                                />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-44 p-2 text-sm">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Notification
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuItem className="list-none">
                            <NavigationMenuTrigger></NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-44 p-2 text-sm">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Settings
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Bantuan Pengguna
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Paket Anda
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Bergabung Mitra
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={"/"}
                                                onClick={auth.logout}
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 text-red-500 transition-all duration-300 hover:bg-slate-100"
                                            >
                                                Sign Out
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenu>
                </nav>
                <div
                    className={`absolute left-0 flex h-screen w-1/5 min-w-72 flex-col space-y-2 border border-r p-6 px-10 transition-all duration-300 ease-in-out ${isHamburgerOpen ? "" : "left-[-50%]"}`}
                >
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/homeIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Beranda</h1>
                    </div>
                    <div
                        className={`flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400 ${showChildren ? "bg-Neutral400" : "bg-white"}`}
                        onClick={() => setShowChildren(!showChildren)}
                    >
                        <Image
                            src="/svgs/situsIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Situs</h1>
                    </div>
                    {showChildren && (
                        <>
                            <div className="cursor-pointer py-2 pl-10 hover:bg-Neutral400">
                                <h1>Situs Anda</h1>
                            </div>
                            <div className="cursor-pointer py-2 pl-10 hover:bg-Neutral400">
                                <h1>Shared</h1>
                            </div>
                        </>
                    )}
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/templatesIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Templates</h1>
                    </div>
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/paketIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Paket Anda</h1>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <nav className="item-center flex w-screen justify-between border border-r p-6">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/pngs/logo.png"
                                alt="Logo"
                                width={50}
                                height={0}
                            />
                            <h1 className="text-xl font-semibold sm:text-2xl">
                                Kartu Digital
                            </h1>
                        </div>
                        <Button variant="ghost" onClick={handleClick}>
                            <Image
                                src="/svgs/hamburgerMenu.svg"
                                alt="hamburger"
                                width={20}
                                height={0}
                            />
                        </Button>
                    </div>
                </nav>
                <div
                    className={`absolute left-0 flex h-screen w-full flex-col space-y-2 border border-r p-6 px-10 transition-all duration-300 ease-in-out ${isHamburgerOpen ? "" : "left-[-100%]"}`}
                >
                    <div className="mx-4 flex h-12 items-center">
                        <Image
                            src="/svgs/searchIcon.svg"
                            alt="search icon"
                            width={30}
                            height={0}
                            className="absolute ml-2"
                        />
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Cari file, template, kartu, semuanya. "
                            className="h-4/5 w-full rounded-full bg-Neutral400 pl-12 pr-4 focus:outline-none"
                        />
                    </div>
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/homeIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Beranda</h1>
                    </div>
                    <div
                        className={`flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400 ${showChildren ? "bg-Neutral400" : "bg-white"}`}
                        onClick={() => setShowChildren(!showChildren)}
                    >
                        <Image
                            src="/svgs/situsIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Situs</h1>
                    </div>
                    {showChildren && (
                        <>
                            <div className="cursor-pointer py-2 pl-10 hover:bg-Neutral400">
                                <h1>Situs Anda</h1>
                            </div>
                            <div className="cursor-pointer py-2 pl-10 hover:bg-Neutral400">
                                <h1>Shared</h1>
                            </div>
                        </>
                    )}
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/templatesIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Templates</h1>
                    </div>
                    <div className="flex cursor-pointer items-center space-x-4 rounded-2xl px-4 py-2 hover:bg-Neutral400">
                        <Image
                            src="/svgs/paketIcon.svg"
                            alt=""
                            width={30}
                            height={0}
                        />
                        <h1>Paket Anda</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
