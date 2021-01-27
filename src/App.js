import "./App.css";
import Footer from "./footer/Footer";
import FarmInfo from "./info/FarmInfo";
import Market from "./market/Market";
import Header from "./header/Header";
import NavDrawer from "./navigator/NavDrawer";
import Nutrition from "./nutirition/Nutrition";
import { createRef, useEffect } from "react";
import HowToStore from "./how-to-store/HowToStore";
import HowToEat from "./how-to-eat/HowToEat";
import HowToCome from "./how-to-come/HowToCome";
import InfoIcon from "@material-ui/icons/Info";
import EvStationIcon from "@material-ui/icons/EvStation";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MapIcon from "@material-ui/icons/Map";

function App() {
	// index % 2 === 0 ? <InboxIcon /> : <MailIcon />

	const menus = {
		farmIntro: { text: "농장소개", ref: createRef(), icon: <InfoIcon /> },
		nutrition: {
			text: "참다래 영양",
			ref: createRef(),
			icon: <EvStationIcon />,
		},
		howToStore: {
			text: "보관방법",
			ref: createRef(),
			icon: <KitchenIcon />,
		},
		howToEat: {
			text: "어떻게 먹지?",
			ref: createRef(),
			icon: <FastfoodIcon />,
		},
		howToCome: { text: "오시는 길", ref: createRef(), icon: <MapIcon /> },
		market: {
			text: "마켓",
			ref: createRef(),
			icon: <ShoppingBasketIcon />,
		},
	};

	let items = createRef();
	let refFarmOutside = createRef();

	items.current = [
		menus.farmIntro,
		menus.nutrition,
		menus.howToStore,
		menus.howToEat,
		menus.howToCome,
		menus.market,
	];
	const registerObserver = () => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: [0.3, 0.7],
		};

		const observer = new IntersectionObserver((i) => {
			if (i[0]) {
				const it = i[0];
				if (it.isIntersecting) {
					if (it.target) {
						it.target.classList.remove("hide");
						observer.unobserve(it.target);
					}
				}
			}
		}, options);
		items.current.forEach((e, idx) => {
			e.ref.current.classList.add("hide");
			observer.observe(e.ref.current);
		});
		observer.observe(refFarmOutside.current);
		return () => {
			items.current.forEach((e, idx) => {
				e.ref.current.classList.remove("hide");
				observer.unobserve(e.ref.current);
			});
			refFarmOutside.current &&
				observer.unobserve(refFarmOutside.current);
		};
	};

	useEffect(registerObserver, [items, refFarmOutside]);
	return (
		<div className='container App-container'>
			<div className='row'>
				<div className='d-none d-lg-flex col-lg-1 col-xl-2'></div>
				<div className='App col-12 col-lg-10 col-xl-8'>
					<NavDrawer
						className='App-navigator'
						items={items.current}
						registerObserver={registerObserver}
					/>
					<Header className='App-header' />
					{/* <Navigator className="App-navigator" /> */}

					<content className='App-content'>
						<FarmInfo ref={menus.farmIntro.ref} />
						<hr />
						<Nutrition ref={menus.nutrition.ref} />
						<hr />
						<HowToStore ref={menus.howToStore.ref} />
						<hr />
						<HowToEat ref={menus.howToEat.ref} />
						<hr />
						<Market ref={menus.market.ref} />
						<hr />
						<HowToCome ref={menus.howToCome.ref} />
						<hr />
						<div
							className='App-farm-outside'
							ref={refFarmOutside}
						/>
					</content>
					<Footer className='App-footer' />
				</div>
				<div className='d-none d-lg-flex col-lg-1 col-xl-2'></div>
			</div>
		</div>
	);
}

export default App;
