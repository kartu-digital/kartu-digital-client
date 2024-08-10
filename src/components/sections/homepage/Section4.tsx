import { Fragment } from "react";
import FeatureCard from "@/components/FeatureCard";

import Items from "@/components/items/homepage/Section4";

export default function Section4() {
    return (
        <Fragment>
            <div className="mx-4 mt-16 px-4 lg:mx-40 lg:mt-48 xl:mx-64">
                <h1 className="text-center text-3xl font-bold lg:text-5xl">
                    Temukan Fitur Luar Biasa Lainnya dari Kartu Digital
                </h1>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-16">
                    {Items.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.img}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
