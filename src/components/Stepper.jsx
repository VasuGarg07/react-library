import { Fragment, useState } from "react";
import "./Stepper.css";

const Stepper = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => setActiveIndex(prev => Math.max(0, prev - 1))
    const handleNext = () => setActiveIndex(prev => Math.min(steps.length - 1, prev + 1))
    const handleSubmit = () => alert("Form Submitted");

    return (
        <div className="container stepper-container">
            {/* Steps */}
            <div className="steps-container">
                {steps.map((step, index) => (
                    <Fragment key={index}>
                        {index > 0 && <div className="step-line spacer"
                            style={{
                                backgroundColor: index <= activeIndex ? "#0071e3" : "#808080"
                            }} />}
                        <div className="step-item">
                            <span className="step-index" style={{
                                backgroundColor: index <= activeIndex ? "#0071e3" : "#808080",
                                color: "white"
                            }}>
                                {index + 1}
                            </span>
                            <span style={{
                                color: index <= activeIndex ? "#0071e3" : "#808080"
                            }}>
                                {step.label}
                            </span>
                        </div>
                    </Fragment>
                ))}
            </div>

            {/* Active Content */}
            <div className="steps-content spacer">
                {steps[activeIndex].content}
            </div>

            {/* Steps Action */}
            <div className="stepper-actions">
                {activeIndex > 0 && <button onClick={handlePrev}>Previous</button>}
                {activeIndex === steps.length - 1 ? (
                    <button onClick={handleSubmit}>Submit</button>
                ) : (
                    <button onClick={handleNext}>Next</button>
                )}
            </div>
        </div>
    )
}

export default Stepper