"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation-footer/Navigation";
import Footer from "@/components/sections/navigation-footer/Footer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const scrollPositionRef = useRef(0);
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user) {
            router.push("/dashboard");
        }
    }, [auth, router]);

    useEffect(() => {
        if (isOpen) {
            scrollPositionRef.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            const scrollY = scrollPositionRef.current;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollY);
        }
    }, [isOpen]);

    return (
        <Fragment>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
            {children}
            <Footer />
        </Fragment>
    );
}
