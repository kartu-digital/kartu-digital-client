"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="w-screen">{children}</div>;
}
