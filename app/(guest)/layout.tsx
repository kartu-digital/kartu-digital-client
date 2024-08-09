"use client";
import React, { Fragment, useEffect } from "react";
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
    useEffect(() => {
        if (auth.user) {
            router.push("/dashboard");
        }
    }, [auth, router]);
    return (
        <Fragment>
            <Navigation />
            {children}
            <Footer />
        </Fragment>
    );
}
