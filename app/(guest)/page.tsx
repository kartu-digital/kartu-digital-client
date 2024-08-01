//tio====================================================
"use client";
import React from "react";

//sections
import Section1 from "@/components/sections/homepage/Section1";
import Section2 from "@/components/sections/homepage/Section2";
import Section3 from "@/components/sections/homepage/Section3";
import Section4 from "@/components/sections/homepage/Section4";
import Section5 from "@/components/sections/homepage/Section5";
import Section6 from "@/components/sections/homepage/Section6";

export default function Home() {
    return (
        <React.Fragment>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </React.Fragment>
    );
}

//======================================================================
