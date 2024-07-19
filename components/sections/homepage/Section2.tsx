//====================================================== tio
import React from "react";
import HoveredImage from "@/components/HoveredImage";
// import Button from "@/components/Button";

import { Button } from "@/components/ui/button";
//items
import Items from "@/components/items/homepage/Section2";

function Section2() {
  return (
    <React.Fragment>
      <div className="mx-4 mt-16 lg:mx-64 lg:mt-28">
        <h1 className="mt-8 text-center text-xl font-bold lg:text-4xl">
          Temukan Beragam Template Kartu yang Menakjubkan
        </h1>
        <p className="text-Black700 mt-6 px-4 text-center text-base lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
          arcu ut elit luctus, sed suscipit nisl iaculis. Mauris eget lectus
          lobortis, mollis diam eget, interdum erat. Etiam non purus vitae nibh
          sagittis laoreet vitae a massa.
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
    </React.Fragment>
  );
}

export default Section2;
//=================================================================
