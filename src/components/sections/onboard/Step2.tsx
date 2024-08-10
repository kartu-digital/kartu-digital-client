// prajna ==============================================================================================
import { Button } from "@/components/ui/button";
import React, { useState, MouseEvent } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import HoveredImage from "@/components/HoveredImage";

export interface IStepProps {
    changeActiveStep: (steps: number) => void;
}

interface IFormData {
    templateId: string;
}

export const Steptwo: React.FC<IStepProps> = ({ changeActiveStep }) => {
    const [formSelected, setFormSelected] = useState<IFormData>({
        templateId: "",
    });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        changeActiveStep(3);
    };

    return (
        <div>
            <div className="flex-col justify-center ">
                <div className="mx-auto block text-center">
                    <h1 className="mx-5 mb-5 text-4xl font-medium tracking-wide">
                        Pilih Template yang Tepat Untuk Anda
                    </h1>
                    <Carousel>
                        <CarouselContent className="mb-5 px-2 sm:px-10">
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/5">
                                <HoveredImage className={"h-56 md:h-80"} />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>

                    <div className="mx-4 flex flex-col justify-center xs:mx-10 sm:mx-0 sm:flex-row">
                        <Button
                            className="mx-2 mb-6 px-10 py-6 sm:mb-0"
                            variant={"black_outline"}
                        >
                            Lihat Semua Template
                        </Button>
                        <Button
                            className="mx-2 px-20 py-6"
                            onClick={handleSubmit}
                            variant={"neon_green"}
                        >
                            Selanjutnya
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==============================================================================================
