"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen">
      <div className="h-24 w-screen bg-black text-white flex items-center">
        <div className="w-full flex justify-between px-10">
          <div className="flex items-center">
            <h1>&lt;</h1>
            <h1 className="px-4 border-r-2 border-white border-opacity-50">
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
