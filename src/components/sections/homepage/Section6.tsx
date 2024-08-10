//tio====================================================================================
import { Fragment } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

//import items
import Items from "@/components/items/homepage/Section6";

function Section6() {
    return (
        <Fragment>
            <div className="mt-16 flex flex-col items-center rounded-3xl bg-Neutral400 px-4 pb-20 pt-8 lg:mt-48 lg:px-64">
                <h1 className="text-2xl font-bold ">
                    Pertanyaan yang Sering Diajukan
                </h1>
                <div className="container mt-8 flex flex-col gap-8">
                    {Items.map((item, index) => (
                        <Accordion
                            key={index}
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            <AccordionItem
                                value="item-1"
                                className="rounded-3xl bg-white px-5 lg:px-10 lg:py-3"
                            >
                                <AccordionTrigger className="text-lg">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Section6;
//===================================================================================
