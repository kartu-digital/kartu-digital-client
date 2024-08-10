"use client";

import { useState } from "react";
import Image from "next/image";

interface HoveredImageProps {
    className?: string;
}

const HoveredImage: React.FC<HoveredImageProps> = ({ className }) => {
    return (
        <div
            className={`inline-flex cursor-pointer rounded-[18px] border-2 border-white bg-Neutral500 hover:border-gray-200 lg:rounded-[26px] ${className}`}
        >
            <div className="bg-lightGray flex aspect-[2/3] w-full justify-center rounded-[16px] border-4 border-white lg:rounded-[24px]">
                <Image
                    src="svgs/image_placeholder.svg"
                    alt="no image"
                    width={50}
                    height={0}
                />
            </div>
        </div>
    );
};

export default HoveredImage;
