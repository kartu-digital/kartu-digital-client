// prajna ==============================================================================================

"use client";

import React, { useMemo, useState } from "react";

import Stepper from "@/components/ui/steppers/stepper";
import { Stepone } from "./Step1";
import { Steptwo } from "./Step2";
import { Stepthree } from "./Step3";
import { Stepfour } from "./Step4";

export default function StepperSection() {
    const [activeStep, setActiveStep] = useState(1);

    const changeActiveStep = (stepValue: number) => {
        if (stepValue <= steps.length || stepValue >= 1) {
            setActiveStep(stepValue);
        }
    };

    const steps = useMemo(
        () => [
            {
                label: "Step 1",
                value: 1,
                component: <Stepone changeActiveStep={changeActiveStep} />,
            },
            {
                label: "Step 2",
                value: 2,
                component: <Steptwo changeActiveStep={changeActiveStep} />,
            },
            {
                label: "Step 3",
                value: 3,
                component: <Stepthree changeActiveStep={changeActiveStep} />,
            },
            {
                label: "Step 4",
                value: 4,
                component: <Stepfour />,
            },
        ],
        [],
    );

    const activeComponent = useMemo(() => {
        return (
            steps.find(({ value }) => value === activeStep)?.component || null
        );
    }, [activeStep, steps]);

    return (
        <div>
            <div>
                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    changeActiveStep={changeActiveStep}
                />
                {activeComponent}
            </div>
        </div>
    );
}

// ==============================================================================================
