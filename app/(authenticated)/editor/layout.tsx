"use client";
import { Image } from "next/dist/client/image-component";
import { Button } from "@/components/ui/button";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-screen">
            <div className="flex h-24 w-screen items-center bg-black text-white">
                <div className="flex w-full justify-between px-10">
                    <div className="flex items-center">
                        <h1>&lt;</h1>
                        <h1 className="border-r-2 border-white border-opacity-50 px-4">
                            Dashboard
                        </h1>
                        <Image
                            src={"svgs/question-mark-circle.svg"}
                            alt="cloud-save-status"
                            width={20}
                            height={0}
                            className="ml-4"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src={"svgs/cloud-save-status.svg"}
                            alt="cloud-save-status"
                            width={25}
                            height={0}
                        />
                        <h1>Kartu Undangan A</h1>
                        <Button
                            size={"default"}
                            variant={"neon_green"}
                            className="px-6 py-5 text-black"
                        >
                            Share
                        </Button>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}
