//tio=================================================================================
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

//import images
import makeEnvelope from "@/public/svgs/make-envelope.svg";

// prajna ====================================================
import editCard from "@/public/svgs/edit-card.svg";

function Section3() {
  return (
    <React.Fragment>
      <div className="mx-4 mt-16 lg:mx-64 lg:mt-48">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="flex h-fit w-full flex-col justify-center lg:w-1/2">
            <h1 className="text-center text-4xl font-bold lg:text-left">
              Buat Kartu Kustom dan Personalisasi
            </h1>
            <p className="mt-6 text-center text-base lg:text-justify lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra arcu ut elit luctus, sed suscipit nisl iaculis. Mauris
              eget lectus lobortis, mollis diam eget, interdum erat. Etiam non
              purus vitae nibh sagittis laoreet{" "}
            </p>
            <div className="mt-6 flex justify-center lg:justify-normal">
              <Button variant="neon_green" size={"global_button"} className="">
                Buat Kartu Sekarang
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <Image alt="make envelope" src={makeEnvelope} className="" />
          </div>
        </div>
      </div>
      <div className="mx-4 mt-16 lg:mx-64 lg:mt-48">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <Image alt="make envelope" src={editCard} className="" />
          </div>
          <div className="flex h-fit w-full flex-col justify-center lg:w-1/2">
            <h1 className="text-center text-4xl font-bold lg:text-left">
              Edit Kartu Anda dengan Mudah
            </h1>
            <p className="mt-6 text-center text-base lg:text-justify lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra arcu ut elit luctus, sed suscipit nisl iaculis. Mauris
              eget lectus lobortis, mollis diam eget, interdum erat. Etiam non
              purus vitae nibh sagittis laoreet{" "}
            </p>
            <div className="mt-6 flex justify-center lg:justify-normal">
              <Button variant="neon_green" size={"global_button"} className="">
                Buat Kartu Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section3;
//===========================================================================
