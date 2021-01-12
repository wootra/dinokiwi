import { forwardRef } from "react";
import marketLogo from "./hd_logo.gif";
import { getUrl } from "./marketUtil";
import marketWhere from "./market_where.png";
import "./Market.css";
import FreeDelevery from "./FreeDelevery";
const mallList = [
	{
		url: getUrl("dinomall"),
		name: "공룡나라 쇼핑몰",
		img: marketLogo,
	},
	{
		url: getUrl("dinomall"),
		name: "공룡나라 쇼핑몰",
		img: marketLogo,
	},
	{
		url: getUrl("dinomall"),
		name: "공룡나라 쇼핑몰",
		img: marketLogo,
	},
	{
		url: getUrl("dinomall"),
		name: "공룡나라 쇼핑몰",
		img: marketLogo,
	},
];
export default forwardRef((props, ref) => {
	const { className } = props;
	return (
		<div
			ref={ref}
			className={`container Market_container${
				className ? " " + className : ""
			}`}
		>
			<div className='row'>
				<div className='Market_img_container col-12 col-md-6 col-lg-4'>
					<img
						src={marketWhere}
						className='Market_img'
						alt='엄마가 키위들고 판매처는요 라고 말하는 그림'
					/>
				</div>
				<div className='Market_link_container col-12 col-md-6 col-lg-8'>
					{mallList.map((obj, idx) => (
						<a
							href={obj.url}
							rel='noreferrer'
							target='_blank'
							tooltip='dd'
							key={idx}
						>
							<div style={{ display: "inline-block" }}>
								<img
									src={obj.img}
									className='Market_mall_logo'
									alt={`${obj.name} 로고`}
								/>
								<FreeDelevery />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
});
