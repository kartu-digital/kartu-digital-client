//====================================================== tio
import React, { Fragment } from "react";
// import Button from "@/components/Button";
import Image from "next/image";

import { Button } from "@/components/ui/button";

//images
import Brush from "@/public/pngs/brush.png";
import ImagePicture from "@/public/pngs/pictures.png";
import Pencil from "@/public/pngs/pencil.png";
import Pentool from "@/public/pngs/pentool.png";

//styles
import styles from "@/components/sections/homepage/css/Section1.module.css";

function Section1() {
  return (
    <Fragment>
      <div className={`mt-40 ${styles.background}`}></div>
      <div className="mt-20 flex w-full justify-around">
        <div className="hidden flex-col justify-around lg:flex lg:justify-between">
          <Image src={Pencil} alt="Pencil" className="w-44" />
          <Image src={Brush} alt="Brush" className="w-44" />
        </div>
        <div className="flex flex-col items-center lg:my-20">
          <h1 className="text-nowrap text-center text-[6vw] font-bold text-Black900 lg:text-7xl">
            Create a{" "}
            <span className="from-PurpleBlue to-GrassGreen bg-gradient-to-r bg-clip-text text-transparent">
              Personalized
            </span>
          </h1>
          <h1 className="text-nowrap text-center text-[6vw] font-bold leading-snug text-Black900 lg:mt-10 lg:text-7xl">
            Card within Minutes
          </h1>
          <p className="mx-20 mt-2 text-center text-[3vw] text-Black700 lg:mx-0 lg:mt-14 lg:w-3/4 lg:text-xl">
            Make beautiful personalized digital cards for your special occasion
            in minutes with our easy-to-use templates.
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
          <Image src={ImagePicture} alt="ImagePicture" className="w-44" />
          <Image src={Pentool} alt="Pentool" className="w-44" />
        </div>
      </div>
    </Fragment>
  );
}

export default Section1;
//=================================================================
