import { useEffect } from "react";
import "./Header.css";
import logo from "./kiwi_logo.png";
import logoPart from "./logo.webp";

function Header(props) {
	useEffect(() => {
		const evListener = (e) => {
			const img = document.getElementById("Header_image_container");
			const sticky = document.getElementById("Header_sticky");
			if (img || sticky) {
				const imgHeight = img.clientHeight;
				const pos = window.pageYOffset / imgHeight;
				const imgOpacity = 1.0 - pos;
				const barOpacity = pos;
				img.style.opacity = imgOpacity > 0 ? imgOpacity : 0;
				sticky.style.opacity = barOpacity > 1 ? 1 : barOpacity;
			}
		};
		document.addEventListener("scroll", evListener);
		console.log("header-start");
		return () => {
			console.log("header-finish");
			document.removeEventListener("scroll", evListener);
		};
	}, []);
	return (
		<header className={`Header_container ${props.className}`}>
			<div className='Header_sticky' id='Header_sticky'>
				공룡나라참다래
			</div>
			<div className='Header_image_container' id='Header_image_container'>
				<div className='Header_title'>
					<p className='Header_title1'>자연을 머금은</p>
					<p className='Header_title2'>공룡나라 참다래</p>
					<p className='Header_description'>
						고성군 성지농장에서 무농약으로 재배한 웰빙 과일입니다.
					</p>
				</div>
				<picture>
					<source srcSet={logoPart} type='image/webp' />
					<img
						src={logo}
						loading='lazy'
						alt='logo'
						className='Header_image'
					/>
				</picture>
			</div>
		</header>
	);
}

export default Header;
