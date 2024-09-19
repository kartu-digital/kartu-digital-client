import Image from "next/image";
import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Work_Sans } from "next/font/google";
import StepperSection from "@/components/sections/onboard/StepperSection";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });

//{Onboard Page Start (Prajna)}
export default function OnBoard() {
    return (
        <>
            <div className="flex h-screen w-screen flex-col">
                <section className="mt-10 flex w-full items-center justify-center">
                    <div className="absolute left-10">
                        <Link
                            href={"/"}
                            className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border-2"
                        >
                            <ArrowBackIosNewIcon className="mr-0.5 scale-75 text-black" />
                        </Link>
                    </div>
                    <Link href={"/"} className="flex items-center">
                        <Image
                            src={"/svgs/logo.svg"}
                            width={45}
                            height={45}
                            alt="logo"
                        />
                        <span className={`${workSans.className} ml-2 text-2xl`}>
                            Kartu Digital
                        </span>
                    </Link>
                </section>
                <section className="my-auto items-center justify-center">
                    <StepperSection />
                </section>
            </div>
        </>
    );
}
// {Onboard Page End}