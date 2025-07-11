export const TrafficLight = ({ color, isActive, onClick }) => {
	// creamos un objeto con los colores con los que vamos a llamar como prop
	const colorClass = {
		red: "btn-danger",
		yellow: "btn-warning",
		green: "btn-success",
		purple: "btn-light"
	}[color];

	return (
		<button
			onClick={onClick}
			className={`btn ${colorClass} mt-3`}
			style={{
				width: "150px",
				height: "150px",
				border: "4px solid black",
				borderRadius: "100px",
				// aqui ponemos el boxshadow cuando este activo el click, y en el caso del morado cambiamos tambien
				// su backgrounColor
				boxShadow: isActive ? "0 0 30px 20px white ,inset 0 0 60px #000000" : "10px 0 0 0 #000000 ",
				backgroundColor: color === "purple" ? "#8a2be2" : undefined
			}}
		></button>
	);
};

