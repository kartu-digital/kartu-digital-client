"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Edit from "@/public/svgs/edit.svg";
import PageEditor from "@/components/PageEditor";

export default function Editor() {
  const [isEditing, setIsEditing] = useState(false);
  const [templateName, setTemplateName] = useState("Orchid Magnase Quartz");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTemplateName(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0px 5px 50px -25px #00000040",
        }}
        className="absolute top-[148px] left-[40px] bg-Neutral300 w-[310px] h-[68px] border-[2px] border-Neutral500 rounded-[15px] px-[20px] flex items-center overflow-hidden"
      >
        <p className="text-[16px] font-bold">Template:</p>
        {isEditing ? (
          <input
            type="text"
            value={templateName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
            onClick={handleEditClick}
            className="max-w-[132px] ml-2 overflow-hidden whitespace-nowrap text-ellipsis border-none bg-transparent text-[16px] px-1"
          />
        ) : (
          <p className="max-w-[132px] ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {templateName}
          </p>
        )}
        <Image
          className="w-[28px] ml-auto cursor-pointer"
          alt="Edit"
          src={Edit}
          onClick={handleEditClick}
        />
      </div>

        <PageEditor />

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
    </>
  );
}
