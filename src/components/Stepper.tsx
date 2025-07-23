import { useState, type SetStateAction } from "react";
import "./Stepper.css";

const Stepper = () => {
    const stepConfig = [
        {
            id: 1,
            key: "Contact Details",
            Component: () => <div>Add contact details for further communications.</div>,
            active: true
        },
        {
            id: 2,
            key: "Shipping Address",
            Component: () => <div>Add shipping address for successful delivery.</div>,
            active: false
        },
        {
            id: 3,
            key: "Payment",
            Component: () => <div>Complete Payment to complete the order.</div>,
            active: false
        },
        {
            id: 4,
            key: "Delivered",
            Component: () => <div>Ready to get delivered!</div>,
            active: false
        }
    ];
    const [currentStep, setCurrentStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);

    if (stepConfig.length === 0) return null;

    const ActiveComponent = stepConfig[currentStep - 1]?.Component;

    const handleClick = (index: SetStateAction<number>) => {
        setIsCompleted(false);
        setCurrentStep(index);
    };

    const handlePrevClick = () => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
        setIsCompleted(false);
    };

    const handleNextClick = () => {
        if (currentStep === stepConfig.length) {
            setIsCompleted(true);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return (
        <div className="stepper-wrapper">
            <div className="stepper">
                {stepConfig.map((step, index) => (
                    <div
                        key={step.id}
                        className={`step ${currentStep === index + 1 ? "active" : ""} ${currentStep > index + 1 || isCompleted ? "complete" : ""
                            }`}
                    >
                        <div className="step-number" onClick={() => handleClick(index + 1)}>
                            {currentStep > index + 1 || isCompleted ? "✓" : index + 1}
                        </div>
                        <div className="step-name">{step.key}</div>
                    </div>
                ))}
                <div
                    className="progress-container"
                    style={{
                        width: `calc(100% - (100% / ${stepConfig.length}))`,
                        marginLeft: `calc(100% / (${stepConfig.length} * 2))`,
                        zIndex: -1
                    }}
                >
                    <div
                        className="progress-bar"
                        style={{
                            width: `${((currentStep - 1) / (stepConfig.length - 1)) * 100}%`
                        }}
                    ></div>
                </div>
            </div>

            <div className="action-container">
                {!isCompleted ? <ActiveComponent /> : <div>Order Delivered successfully! 🎉</div>}
                <div className="btn-group">
                    <button onClick={handlePrevClick} disabled={currentStep === 1}>
                        Previous
                    </button>
                    <button onClick={handleNextClick} disabled={isCompleted}>
                        {currentStep === stepConfig.length ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
