import React, { useState } from "react";
import "./Alldummy.css";

const Roadmap = ({ steps }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const calculateFontSize = (text) => {
        const baseFontSize = 16; // Base font size in pixels
        const maxChars = 10; // Maximum characters to fit
    
        if (text.length > maxChars) {
            const scaleFactor = Math.max(0.5, (maxChars / text.length));
            return `${baseFontSize * scaleFactor}px`;
        }
        return `${baseFontSize}px`;
    };
    


    return (
        <div className="roadmap-container1">
            {steps.length > 0 ? (
                steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`roadmap-step ${index % 2 === 0 ? "up" : "down"}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="icon">
                                <i className="fa-solid fa-bus"></i>
                            </div>
                            <div className="step-info">
                            <p style={{ fontSize: calculateFontSize(step.stopname) }}>{step.stopname || "Stop Name"}</p>
                                {hoveredIndex === index && (
                                    <div className="popup">
                                        <p>Time: {step.stoptime || "Time Unavailable"}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="roadmap-connector">
                                <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                                    <path
                                        d={`M0,${index % 2 === 0 ? "100" : "0"} C100,${index % 2 === 0 ? "0" : "100"} 100,${index % 2 === 0 ? "100" : "0"} 200,${index % 2 === 0 ? "0" : "100"}`}
                                        className="connector-path"
                                    ></path>
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <p>No stops available</p>
            )}
            <div className="end-arrow"></div>
        </div>
    );
};

export default Roadmap;
