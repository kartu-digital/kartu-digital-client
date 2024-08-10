"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Edit from "@/public/svgs/edit.svg";

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
                className="absolute left-[40px] top-[148px] flex h-[68px] w-[310px] items-center overflow-hidden rounded-[15px] border-[2px] border-Neutral500 bg-Neutral300 px-[20px]"
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
                        className="ml-2 max-w-[132px] overflow-hidden text-ellipsis whitespace-nowrap border-none bg-transparent px-1 text-[16px]"
                    />
                ) : (
                    <p className="ml-2 max-w-[132px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {templateName}
                    </p>
                )}
                <Image
                    className="ml-auto w-[28px] cursor-pointer"
                    alt="Edit"
                    src={Edit}
                    onClick={handleEditClick}
                />
            </div>

            <div
                style={{
                    boxShadow: "0px 5px 50px -25px #00000040",
                }}
                className="absolute right-[40px] top-[148px] h-fit w-[427px] rounded-[15px] border-[2px] border-Neutral500 bg-Neutral300 px-[20px]"
            >
                <div className="flex h-[68px] w-full items-center">
                    <p className="text-[16px] font-bold">Cover Depan</p>
                </div>
                <div>
                    <div className="mb-4">
                        <p className="mb-2 font-semibold">Title</p>
                        <input
                            type="text"
                            className="h-[52px] w-full rounded-[15px] bg-Neutral400 px-[14px] "
                        />
                    </div>
                    <div className="mb-4">
                        <p className="mb-2 font-semibold">Sub-title</p>
                        <textarea className="h-[76px] w-full resize-none rounded-[15px] bg-Neutral400 px-[14px] pt-2 " />
                    </div>
                    <div className="mb-4">
                        <p className="mb-2 font-semibold">Tanggal & Waktu</p>
                        <input
                            type="datetime-local"
                            className="h-[52px] w-full rounded-[15px] bg-Neutral400 px-[14px] "
                        />
                    </div>
                    <div className="mb-4">
                        <p className="mb-2 font-semibold">Lokasi</p>
                        <input
                            type="text"
                            className="h-[52px] w-full rounded-[15px] bg-Neutral400 px-[14px] "
                        />
                    </div>
                </div>
                <div>
                    <button className="my-[24px] h-[52px] w-full rounded-[15px] bg-[#FF453A] text-white">
                        Buang Halaman
                    </button>
                </div>
            </div>
        </>
    );
}
