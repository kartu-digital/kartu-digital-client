"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import PencilIcon from '@gravity-ui/icons/svgs/pencil.svg';
import PageEditor from "@/components/PageEditor";
import Draggable from "@/components/Draggable";

export default function Editor() {
  
  let templateName = "Orchid Magnase Quartz";

  return (
    <>
{/* Start {template(russel)} */}
      <div
        style={{
          boxShadow: "0px 5px 50px -25px #00000040",
        }}
        className="absolute top-[148px] left-[40px] bg-Neutral300 w-[310px] h-[68px] border-[2px] border-Neutral500 rounded-[15px] px-[20px] flex items-center overflow-hidden"
      >
        <p className="text-[16px] font-bold">Template:</p>
    
          <p className="max-w-[132px] ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {templateName}
          </p>

        <Image
          className="w-[20px] ml-auto cursor-pointer"
          alt="Edit"
          width={100}
          height={100}
          src={PencilIcon}
        />
      </div>
{/* End {template} */}


        <PageEditor />
{/* Start {Pengaturan (russel)} */}

      <div
        style={{
          boxShadow: "0px 5px 50px -25px #00000040",
        }}
        className="absolute top-[580px] left-[40px] bg-Neutral300 w-[310px] max-h-[322px] pb-[24px] border-[2px] border-Neutral500 rounded-[15px] px-[20px]"
      >
        <div className="w-full h-[68px] flex items-center">
          <p className="text-[16px] font-bold">Pengaturan</p>
        </div>
        <div className="flex flex-col gap-5 h-full overflow-scroll">
            <Draggable parameter="Ubah Desain"/>
            <Draggable parameter="Musik"/>
            <Draggable parameter="Autoplay"/>
        </div>
      </div>

{/* End {Pengaturan} */}

{/* Start {Editor(russel)} */}
      <div
        style={{
          boxShadow: "0px 5px 50px -25px #00000040",
        }}
        className="absolute right-[40px] top-[148px] bg-Neutral300 w-[427px] h-fit border-[2px] border-Neutral500 rounded-[15px] px-[20px]"
      >
        <div className="w-full h-[68px] flex items-center">
          <p className="text-[16px] font-bold">Cover Depan</p>
        </div>
        <div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Title</p>
            <input
              type="text"
              className="bg-Neutral400 rounded-[15px] h-[52px] w-full px-[14px] "
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Sub-title</p>
            <textarea className="bg-Neutral400 resize-none pt-2 rounded-[15px] h-[76px] w-full px-[14px] " />
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Tanggal & Waktu</p>
            <input
              type="datetime-local"
              className="bg-Neutral400 rounded-[15px] h-[52px] w-full px-[14px] "
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Lokasi</p>
            <input
              type="text"
              className="bg-Neutral400 rounded-[15px] h-[52px] w-full px-[14px] "
            />
          </div>
        </div>
        <div>
          <button className="w-full h-[52px] bg-[#FF453A] text-white rounded-[15px] my-[24px]">
            Buang Halaman
          </button>
        </div>
      </div>
      {/* End {editor} */}
    </>
  );
}
