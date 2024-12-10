import React, { useState, useEffect } from "react";
import "../../styles/semaforo.css";

function Semaforo({ extraColors }) {
    const baseColors = ["Rojo", "Amarillo", "Verde"];
    const [currentColor, setCurrentColor] = useState(baseColors[0]);
    const allColors = [...baseColors, ...extraColors];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColor((prevColor) => {
                const nextIndex = (allColors.indexOf(prevColor) + 1) % allColors.length;
                return allColors[nextIndex];
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [allColors]);

    return (
        <div className="semaforo">
            {allColors.map((color, index) => (
                <div
                    key={index}
                    className={`luz ${currentColor === color ? color.toLowerCase() : ""}`}
                ></div>
            ))}
        </div>
    );
}

export default Semaforo;
