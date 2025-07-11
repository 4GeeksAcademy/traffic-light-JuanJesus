import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./Trafficlight";

//create your first component
const Home = () => {
	// inicializamos los states
	const [activeColor, setActiveColor] = useState(null);
	const [purpleColor, setPurpleColor] = useState(false);
	const [yellowBlink, setYellowBlink] = useState(false);
	// aqui creamos el intervalo para el amarillo intermitente
	useEffect(() => {
		let interval;
		let blink = true;
		if (activeColor === "yellow") {
			setYellowBlink(true);
			interval = setInterval(() => {
				blink = !blink;
				setYellowBlink(blink);
			}, 500);
		} else {
			setYellowBlink(false);
		}

		return () => clearInterval(interval);
	}, [activeColor]);

	return (
		// botones para añadir y quitar el boton morado y para alternar entre todos
		<><div className="botones mt-5 mx-5">
			<button className="btn" id="añadir" onClick={() => setPurpleColor(!purpleColor)}>{purpleColor ?
				"Quitar color morado" : "Añadir color morado"}</button>
		</div>
			<div className="mt-5 mx-5">
				<button className="btn" id="alternar" onClick={() => setActiveColor(
					activeColor === "red" ? "yellow" : activeColor === "yellow" ? "green" : activeColor === "green"
						? "purple" : "red"
				)}>Alternar entre colores</button>
			</div>
			{/* creamos el container para los botones  */}
			<div className="container text-center">
				<div
					className="p-5 mx-auto mt-5"
					style={{
						width: "400px",
						height: "800px",
						backgroundColor: "green",
						border: "4px solid black",
						borderRadius: "20px",
						boxShadow: "60px 0 0 0 #000000 ,inset -10px 0 10px #000000"
					}}
				>
					{/* en la luz amarilla llamamos a yellowblink por el useEffect y en purple decimos
					que purpleColor y Trafficlight se inician haciendo que el boton de fuera lo oculta o 
					enseña, y el del semaforo enciende la luz */}
					<TrafficLight
						color="red"
						isActive={activeColor === "red"}
						onClick={() => setActiveColor("red")} />
					<TrafficLight
						color="yellow"
						isActive={activeColor === "yellow" && yellowBlink}
						onClick={() => setActiveColor("yellow")} />
					<TrafficLight
						color="green"
						isActive={activeColor === "green"}
						onClick={() => setActiveColor("green")} />
					{purpleColor && (
						<TrafficLight
							color="purple"
							isActive={activeColor === "purple"}
							onClick={() => setActiveColor("purple")} />
					)}


				</div>

				<div
					className="mx-auto"
					style={{
						width: "100px",
						height: "600px",
						backgroundColor: "green",
						border: "4px solid black",
						borderTop: "none",
						boxShadow: "60px 0 0 0 #000000 ,inset -10px 0 10px #000000"
					}}
				></div>
			</div></>

	);
};

export default Home;