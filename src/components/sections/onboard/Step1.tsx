//prajna =========================================================================

import React, { useState } from "react";
import styles from "./css/Form1.module.css";
import { Button } from "@/components/ui/button";

export interface IStepProps {
    changeActiveStep: (step: number) => void;
}

interface IFormData {
    category: string;
}

const handleSubmit = () => {};

export const Stepone: React.FC<IStepProps> = ({ changeActiveStep }) => {
    const [formSelected, setFormSelected] = useState<IFormData>({
        category: "",
    });

    const handleRadioSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormSelected({ category: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // jangan lupa diapus !!!
        console.log(formSelected.category);

        changeActiveStep(2);
    };

    return (
        <div>
            <div className="mx-auto block max-w-xl text-center">
                <h1 className="mx-5 mb-10 text-4xl font-medium tracking-wider md:mx-0">
                    Halo! Pilih Kategori Kartumu
                </h1>
                <p className="mx-5 mb-10 flex md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pharetra arcu ut elit luctus, sed suscipit nisl iaculis.{" "}
                </p>
            </div>
            <div></div>
            <form onSubmit={handleSubmit} className=" space-y-16">
                <div className="grid justify-center xs:grid-cols-2 md:flex">
                    <div
                        onClick={() =>
                            setFormSelected({ category: "undangan-digital" })
                        }
                        className={`mx-4 my-2 flex cursor-pointer space-x-2 rounded-[20px] border-2 px-4 py-4 xs:py-3 ${formSelected.category === "undangan-digital" ? "bg-black text-white" : ""}`}
                    >
                        <input
                            className={`cursor-pointer accent-black`}
                            type="radio"
                            id="undanganDigital"
                            name="category"
                            value="undangan-digital"
                            checked={
                                formSelected.category === "undangan-digital"
                            }
                            onChange={handleRadioSelected}
                        />
                        <label
                            className="cursor-pointer"
                            htmlFor="undanganDigital"
                        >
                            Undangan Digital
                        </label>
                    </div>
                    <div
                        onClick={() =>
                            setFormSelected({ category: "kartu-digital" })
                        }
                        className={`mx-4 my-2 flex cursor-pointer space-x-2 rounded-[20px] border-2 px-4 py-4 xs:py-3 ${formSelected.category === "kartu-digital" ? "bg-black text-white" : ""}`}
                    >
                        <input
                            className={`cursor-pointer accent-black`}
                            type="radio"
                            id="kartuDigital"
                            name="category"
                            value="kartu-digital"
                            checked={formSelected.category === "kartu-digital"}
                            onChange={handleRadioSelected}
                        />
                        <label
                            className="cursor-pointer"
                            htmlFor="kartuDigital"
                        >
                            Kartu Digital
                        </label>
                    </div>
                    <div
                        onClick={() =>
                            setFormSelected({ category: "link-in-bio" })
                        }
                        className={`mx-4 my-2 flex cursor-pointer space-x-2 rounded-[20px] border-2 px-4 py-4 xs:py-3 ${formSelected.category === "link-in-bio" ? "bg-black text-white" : ""}`}
                    >
                        <input
                            className={`cursor-pointer accent-black`}
                            type="radio"
                            id="linkInBio"
                            name="category"
                            value="link-in-bio"
                            checked={formSelected.category === "link-in-bio"}
                            onChange={handleRadioSelected}
                        />
                        <label className="cursor-pointer" htmlFor="linkInBio">
                            Link In Bio
                        </label>
                    </div>
                    <div
                        onClick={() =>
                            setFormSelected({ category: "one-page" })
                        }
                        className={`mx-4 my-2 flex cursor-pointer space-x-2 rounded-[20px] border-2 px-4 py-4 xs:py-3 ${formSelected.category === "one-page" ? "bg-black text-white" : ""}`}
                    >
                        <input
                            className={`cursor-pointer accent-black`}
                            type="radio"
                            id="onePage"
                            name="category"
                            value="one-page"
                            checked={formSelected.category === "one-page"}
                            onChange={handleRadioSelected}
                        />
                        <label className="cursor-pointer" htmlFor="onePage">
                            One-Page
                        </label>
                    </div>
                </div>
                <Button
                    type="submit"
                    variant={"neon_green"}
                    className="mx-auto px-20 py-6"
                >
                    Selanjutnya
                </Button>
            </form>
        </div>
    );
};

//============================================================================================
