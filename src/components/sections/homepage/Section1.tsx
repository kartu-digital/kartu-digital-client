import { Fragment } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import styles from "@/components/sections/homepage/css/Section1.module.css";

export default function Section1() {
    return (
        <Fragment>
            <div className={`mt-40 ${styles.background}`}></div>
            <div className="mt-20 flex w-full justify-around">
                <div className="hidden flex-col justify-around lg:flex lg:justify-between">
                    <Image
                        src="/pngs/pencil.png"
                        alt="Pencil"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/pngs/brush.png"
                        alt="Brush"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col items-center lg:my-20">
                    <h1 className="text-nowrap text-center text-[6vw] font-bold text-Black900 lg:text-7xl">
                        Create a{" "}
                        <span className="bg-gradient-to-r from-PurpleBlue to-GrassGreen bg-clip-text text-transparent">
                            Personalized
                        </span>
                    </h1>
                    <h1 className="text-nowrap text-center text-[6vw] font-bold leading-snug text-Black900 lg:mt-10 lg:text-7xl">
                        Card within Minutes
                    </h1>
                    <p className="mx-20 mt-2 text-center text-[3vw] text-Black700 lg:mx-0 lg:mt-14 lg:w-3/4 lg:text-xl">
                        Make beautiful personalized digital cards for your
                        special occasion in minutes with our easy-to-use
                        templates.
                    </p>
                    <Button
                        size={"global_button"}
                        variant="neon_green"
                        className="mt-2 lg:mt-14"
                    >
                        Buat Kartu Sekarang
                    </Button>
                </div>
                <div className="hidden flex-col justify-around lg:flex lg:justify-between">
                    <Image
                        src="/pngs/pictures.png"
                        alt="ImagePicture"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/pngs/pentool.png"
                        alt="Pentool"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </Fragment>
    );
}
