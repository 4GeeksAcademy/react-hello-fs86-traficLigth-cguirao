import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import Semaforo from '../component/Semaforo.jsx';

const Home = () => {
	const [extraColors, setExtraColors] = useState([]);

	const nuevoColor = () => {
        if (extraColors.length < 1) setExtraColors((prevColors) => [...prevColors, "Purpura"])
    };
	
	return (
		<div className='traficLigth'>
			<Semaforo extraColors={extraColors} />
			<div>
				<button onClick={nuevoColor} >Pulsar Aquí!!</button>
			</div>

		</div>
	);
};

export default Home;
