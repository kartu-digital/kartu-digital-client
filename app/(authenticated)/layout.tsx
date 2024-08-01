"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const auth = useAuth();
    return (
        <div className="w-screen">
            {auth?.user?.email}
            {children}
        </div>
    );
}
