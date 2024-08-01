"use client";
import React, { Fragment } from "react";
import Navigation from "@/components/sections/navbar-footer/Navigation";
import Footer from "@/components/sections/navbar-footer/Footer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const auth = useAuth();
    const router = useRouter();
    if (auth?.user) {
        router.push("/dashboard");
    }
    return (
        <Fragment>
            <Navigation />
            {children}
            <Footer />
        </Fragment>
    );
}
