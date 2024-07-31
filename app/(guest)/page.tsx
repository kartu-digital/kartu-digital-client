//tio====================================================
"use client";
import React, { useContext } from "react";

//sections
import Section1 from "@/components/sections/homepage/Section1";
import Section2 from "@/components/sections/homepage/Section2";
import Section3 from "@/components/sections/homepage/Section3";
import Section4 from "@/components/sections/homepage/Section4";
import Section5 from "@/components/sections/homepage/Section5";
import Section6 from "@/components/sections/homepage/Section6";
import AuthContext from "@/context/AuthContext";

export default function Home() {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("Auth Context must be use within an Auth Provider");
    }
    const { user } = authContext;
    console.log("test" + user);
    return (
        <React.Fragment>
            <h1>{user?.email}aa</h1>
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
