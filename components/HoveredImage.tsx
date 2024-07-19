"use client";

import { useState } from "react";
import Image from "next/image";

export default function HoveredImage({ className }) {
  return (
    <div className={`bg-Neutral500 inline-flex cursor-pointer rounded-[18px] border-2 border-white hover:border-gray-200 lg:rounded-[26px] ${className}`}>
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
}
