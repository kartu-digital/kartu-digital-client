"use client";

import { Fragment, CSSProperties, useState, useEffect } from "react";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";

import { Button } from "@/components/ui/button";
import { steps } from "@/data/homepage/data";
import HoveredImage from "@/components/HoveredImage";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { features } from "@/data/homepage/data";
import FeatureCard from "@/components/FeatureCard";

//import items
import { faqs } from "@/data/homepage/data";
export default function Index() {
    //keperluan dot background untuk section 1
    const dotBackgroundStyle: CSSProperties = {
        backgroundSize: "cover",
        borderRadius: "5rem",
        display: "flex",
        backgroundImage: 'url("/webp/dot-background.webp")',
        WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)",
        maskImage:
            "radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)",
        width: "100%",
        height: "80rem",
        position: "absolute",
        left: "50%",
        zIndex: -1,
        transform: "translate(-50%, -50%)",
    };

    //use state untuk active button
    const [activeButton, setActiveButton] = useState<number | null>(1); // nge set state button mana yang ke klik.
    const [activeMessage, setActiveMessage] = useState<{
        title: string;
        description: string;
    } | null>({
        title: "",
        description: "",
    });

    //use effect buat trigger kalo button ke klik maka akan update activeButton state abis itu bakal ngubah messagenya
    useEffect(() => {
        if (activeButton !== null) {
            setActiveMessage(steps[activeButton - 1]);
        } else {
            setActiveMessage({
                title: "Loading...",
                description: "Loading...",
            });
        }
    }, [activeButton]);

    //ini function untuk biar bisa ngubah state button yang di klik
    const handleButtonClick = (buttonText: number) => {
        setActiveButton(buttonText);
    };

    return (
        <Fragment>
            {/* {Start Section 1 [Landing Section] (Tio)} */}
            <div className={`mt-40`} style={dotBackgroundStyle}></div>
            <div className="mt-20 flex w-full justify-around">
                <div className="hidden flex-col justify-around lg:flex lg:justify-between">
                    <Image
                        src="/webp/pencil.webp"
                        alt="Pencil"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/webp/brush.webp"
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
                        src="/webp/pictures.webp"
                        alt="ImagePicture"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/webp/pentool.webp"
                        alt="Pentool"
                        className="w-44"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            {/* {End Section 1 [Landing Section]} */}

            {/* Start Section 2 [Beragram Template] (Tio) */}
            <div className="mx-4 mt-16 lg:mx-64 lg:mt-28">
                <h1 className="mt-8 text-center text-xl font-bold lg:text-4xl">
                    Temukan Beragam Template Kartu yang Menakjubkan
                </h1>
                <p className="mt-6 px-4 text-center text-base text-Black700 lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pharetra arcu ut elit luctus, sed suscipit nisl iaculis.
                    Mauris eget lectus lobortis, mollis diam eget, interdum
                    erat. Etiam non purus vitae nibh sagittis laoreet vitae a
                    massa.
                </p>
                {/* <div className="flex flex-wrap justify-center gap-8 lg:gap-0 lg:justify-between mx-auto mt-8"> */}
                <div className="my-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-2 xl:grid-cols-5">
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                    <HoveredImage />
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                    <Button size={"global_button"} variant="neon_green">
                        Buat Kartu Sekarang
                    </Button>
                    <Button size={"global_button"} variant="black_outline">
                        Lihat Lebih Banyak
                    </Button>
                </div>
            </div>
            {/* End Section 2 [Beragram Template] */}

            {/* Start Section 3 [Feature] (Tio) */}
            <div className="mx-4 mt-16 lg:mx-64 lg:mt-48">
                <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                    <div className="flex h-fit w-full flex-col justify-center lg:w-1/2">
                        <h1 className="text-center text-4xl font-bold lg:text-left">
                            Buat Kartu Kustom dan Personalisasi
                        </h1>
                        <p className="mt-6 text-center text-base lg:text-justify lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam pharetra arcu ut elit luctus, sed suscipit
                            nisl iaculis. Mauris eget lectus lobortis, mollis
                            diam eget, interdum erat. Etiam non purus vitae nibh
                            sagittis laoreet{" "}
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-normal">
                            <Button
                                variant="neon_green"
                                size={"global_button"}
                                className=""
                            >
                                Buat Kartu Sekarang
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center lg:w-1/2">
                        <Image
                            alt="make envelope"
                            src="/svgs/make-envelope.svg"
                            className=""
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-4 mt-16 lg:mx-64 lg:mt-48">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    <div className="flex w-full items-center justify-center lg:w-1/2">
                        <Image
                            alt="make envelope"
                            src="/svgs/edit-card.svg"
                            className=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex h-fit w-full flex-col justify-center lg:w-1/2">
                        <h1 className="text-center text-4xl font-bold lg:text-left">
                            Edit Kartu Anda dengan Mudah
                        </h1>
                        <p className="mt-6 text-center text-base lg:text-justify lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam pharetra arcu ut elit luctus, sed suscipit
                            nisl iaculis. Mauris eget lectus lobortis, mollis
                            diam eget, interdum erat. Etiam non purus vitae nibh
                            sagittis laoreet{" "}
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-normal">
                            <Button
                                variant="neon_green"
                                size={"global_button"}
                                className=""
                            >
                                Buat Kartu Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 3 [Feature] */}

            {/* Start Section 4 [Feature] (Tio) */}
            <div className="mx-4 mt-16 px-4 lg:mx-40 lg:mt-48 xl:mx-64">
                <h1 className="text-center text-3xl font-bold lg:text-5xl">
                    Temukan Fitur Luar Biasa Lainnya dari Kartu Digital
                </h1>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-16">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.img}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            {/* End Section 4 [Feature] */}

            {/* Start Section 5 [Step] (Tio) */}
            <div className="mx-4 mt-16 lg:mx-64 lg:mt-48">
                <div className="flex flex-wrap-reverse justify-between">
                    <div className="md:w-1/2">
                        <h1 className="mb-8 text-2xl font-bold lg:text-4xl">
                            Cara Membuat Kartu Digital Anda
                        </h1>
                        <GradientButton
                            size="step"
                            text="1"
                            isActive={activeButton === 1}
                            onClick={() => handleButtonClick(1)}
                        />
                        <GradientButton
                            size="step"
                            text="2"
                            isActive={activeButton === 2}
                            onClick={() => handleButtonClick(2)}
                        />
                        <GradientButton
                            size="step"
                            text="3"
                            isActive={activeButton === 3}
                            onClick={() => handleButtonClick(3)}
                        />
                        <GradientButton
                            size="step"
                            text="4"
                            isActive={activeButton === 4}
                            onClick={() => handleButtonClick(4)}
                        />
                        <GradientButton
                            size="step"
                            text="5"
                            isActive={activeButton === 5}
                            onClick={() => handleButtonClick(5)}
                        />
                        <h6 className="mt-8 text-xl font-bold lg:text-2xl">
                            {activeMessage?.title}
                        </h6>
                        <p className="mt-4 text-lg lg:mr-5 lg:text-xl">
                            {activeMessage?.description}
                        </p>
                    </div>
                    <Image
                        alt="make envelope"
                        src="/svgs/how-to-make-your-card.svg"
                        className="md:w-1/2"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            {/* End Section 5 Step */}

            {/* Start Section 6 FAQs (Tio) */}
            <div className="mt-16 flex flex-col items-center rounded-3xl bg-Neutral400 px-4 pb-20 pt-8 lg:mt-48 lg:px-64">
                <h1 className="text-2xl font-bold ">
                    Pertanyaan yang Sering Diajukan
                </h1>
                <div className="container mt-8 flex flex-col gap-8">
                    {faqs.map((item, index) => (
                        <Accordion
                            key={index}
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            <AccordionItem
                                value="item-1"
                                className="rounded-3xl bg-white px-5 lg:px-10 lg:py-3"
                            >
                                <AccordionTrigger className="text-lg">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>

            {/* End Section 6 (Step) */}
        </Fragment>
    );
}
