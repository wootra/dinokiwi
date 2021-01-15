import { useEffect } from "react";

const transform = (imgId) => {
	const img = document.getElementById(imgId);
	const imgHeight = img.clientHeight;
	const imgStart = img.offsetTop;
	const winHeight = window.innerHeight;
	const yOffset = window.pageYOffset;
	if (imgStart < yOffset + winHeight) {
		const offsetChange = yOffset + winHeight - imgStart;
		const yPos = offsetChange / winHeight;
		const yPos2 = (offsetChange - winHeight) / imgHeight;
		let imgOpacity = yPos > 1 ? 1 - yPos2 * 2 : yPos;
		imgOpacity += 0.6;
		img.style.opacity = imgOpacity > 0 ? imgOpacity : 0;
		let blur = yPos > 1 ? yPos2 : 0;
		blur = blur > 0.4 ? blur - 0.4 : 0;
		if (blur < 0.5) {
			img.style.filter = "blur(" + blur + "em)";
		}
	}
};
export const useImageMove = (imgId) => {
	useEffect(() => {
		const evListener = (e) => {
			transform(imgId);
		};
		transform(imgId);
		document.addEventListener("scroll", evListener);
		return () => {
			document.removeEventListener("scroll", evListener);
		};
	}, [imgId]);
};
