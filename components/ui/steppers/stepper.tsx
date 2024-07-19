// prajna ==============================================================================================

import React from "react";
import styles from "@/components/ui/steppers/css/Stepper.module.css";

interface Step {
    label: string;
    value: number;
    component: JSX.Element;
}

interface StepperProps {
    steps: Step[];
    activeStep: number;
    changeActiveStep: (stepValue: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
    steps,
    activeStep,
    changeActiveStep,
}) => {
    return (
        <div
            className={`absolute top-24 xs:top-36 md:top-44  ${styles.stepperContainer}`}
        >
            {steps.map((step, index) => (
                <div key={index} className={styles.stepContainer}>
                    <div
                        className={`${styles.step} ${activeStep === step.value ? styles.active : ""}`}
                        onClick={() => changeActiveStep(step.value)}
                    >
                        {step.value}
                    </div>
                    {index < steps.length - 1 && (
                        <div className={styles.line} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stepper;

//  ==============================================================================================
