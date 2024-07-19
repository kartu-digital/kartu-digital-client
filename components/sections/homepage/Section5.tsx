//tio====================================================================
"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";

//component
import GradientButton from "@/components/GradientButton";

//images
import howToMakeCard from "@/public/svgs/how-to-make-your-card.svg";

//items
import steps from "@/components/items/homepage/section5";

function Section5() {
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
      setActiveMessage({ title: "Loading...", description: "Loading..." });
    }
  }, [activeButton]);

  //ini function untuk biar bisa ngubah state button yang di klik
  const handleButtonClick = (buttonText: number) => {
    setActiveButton(buttonText);
  };

  //document display
  return (
    <React.Fragment>
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
          <Image alt="make envelope" src={howToMakeCard} className="md:w-1/2" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section5;
//====================================================================================
