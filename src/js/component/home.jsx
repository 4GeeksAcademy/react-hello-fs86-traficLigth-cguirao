import React, { useState, useEffect } from "react";
import "../../styles/home.css";

const Home = () => {
  const colors = ["Rojo", "Amarillo", "Verde"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // [] asegura que el efecto se ejecute solo una vez al montar

  return (
    <div className="semaforo">
      <div className={`luz ${currentColor === "Rojo" ? "rojo" : ""}`}></div>
      <div className={`luz ${currentColor === "Amarillo" ? "amarillo" : ""}`}></div>
      <div className={`luz ${currentColor === "Verde" ? "verde" : ""}`}></div>
    </div>
  );
};

export default Home;
