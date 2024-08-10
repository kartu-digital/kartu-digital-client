// prajna ==============================================================================================

import React from "react";
import CircleIcon from "@/public/webp/CircleIcon.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";
export const Stepfour = () => {
    // const router = useRouter();

    // const handleSubmit = () => {
    //   router.push('/');
    // }
    return (
        <div className="flex-col justify-center">
            <div className="mx-auto text-center">
                <Image
                    src={CircleIcon}
                    width={100}
                    height={100}
                    className="mx-auto mb-16 scale-125"
                    alt="Image"
                ></Image>
                <h1 className="mb-10 text-4xl font-medium tracking-wider">
                    Mari Ciptakan Sesuatu yang Luar Biasa!
                </h1>
                <p className="mx-auto flex max-w-2xl px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque dignissimos at soluta. Voluptatum debitis,
                    dolores non numquam nihil ea consequuntur.
                </p>
            </div>
            <Button variant={"neon_green"} className="mx-auto mt-10 px-10 xs:py-8 py-6">
                Generate Undangan Digital
            </Button>
        </div>
    );
};

// ==============================================================================================
