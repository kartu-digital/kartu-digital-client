// prajna =====================================================================
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";

export interface IStepProps {
    changeActiveStep: (steps: number) => void;
}

interface IFormData {
    domain: string;
}

export const Stepthree: React.FC<IStepProps> = ({ changeActiveStep }) => {
    const [inputDomain, setInputDomain] = useState("domainanda");
    const inputRef = useRef<HTMLInputElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "");
        setInputDomain(sanitizedValue);
    };

    const handleSubmit = () => {
        // jangan lupa apus
        console.log(inputDomain);
        changeActiveStep(4);
    };

    useEffect(() => {
        if (inputRef.current && spanRef.current) {
            inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
        }
    }, [inputDomain]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="mb-10 text-4xl font-medium tracking-wider">
                    Buat Domain Kartu Digital Anda
                </h1>
                <p className="mx-5 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pharetra arcu ut elit luctus, sed suscipit nisl iaculis.
                </p>
            </div>
            <div className=" mb-10 w-11/12 space-y-2 px-2 sm:w-8/12 md:w-3/5 lg:w-3/6 xl:w-2/6">
                <label htmlFor="domain" className="flex-shrink-0 font-semibold">
                    Edit URL Domain
                </label>
                <div className="relative flex items-center overflow-x-scroll rounded-[20px] bg-gray-100 px-4 py-4 scrollbar-hide">
                    <span className="text-sm text-gray-400 sm:text-base">
                        https://
                    </span>
                    <div className="flex items-center text-sm sm:text-base">
                        <input
                            type="text"
                            id="domain"
                            value={inputDomain}
                            onChange={handleChange}
                            ref={inputRef}
                            className="bg-transparent text-gray-700 outline-none"
                        />
                        <span
                            ref={spanRef}
                            className="invisible absolute h-0"
                            style={{ whiteSpace: "pre" }}
                        >
                            {inputDomain}
                        </span>
                    </div>
                    <span className=" text-sm text-gray-400 sm:text-base">
                        .kartudigital.com
                    </span>
                </div>
            </div>
            <Button
                onClick={handleSubmit}
                variant={"neon_green"}
                className="mx-auto px-20 py-6"
            >
                Selanjutnya
            </Button>
        </div>
    );
};

// ==============================================================================================
