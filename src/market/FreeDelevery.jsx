import img from "./FreeDelevery.svg";

export default function FreeDelevery(props) {
	return (
		<img
			src={img}
			style={{
				position: "relative",
				left: "-40px",
				top: "-20px",
				width: "50px",
				height: "30px",
			}}
			alt='free delevery'
			{...props}
		/>
	);
}
