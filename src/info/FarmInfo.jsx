import { forwardRef } from "react";
import farmIntro from "./farm_introduce.png";
import "./Info.css";

export default forwardRef((props, ref) => {
	const { className } = props;
	return (
		<div
			ref={ref}
			className={`container FarmInfo_container${
				className ? " " + className : ""
			}`}
		>
			<div className='row'>
				<img
					className='col-xs col-md-6 col-lg-5 FarmInfo_introImg'
					src={farmIntro}
					alt='성지키위농장 설명'
				/>
				<div className='col-xs col-md-6 col-lg-7'>
					<div className='FarmInfo_introText1'>
						<p>
							성지농장의 "공룡나라참다래" 는 1987년부터 오직
							참다래를 맛있고 우수하게 키위기 위한 노력을 묵묵히
							지속하고 있습니다.
						</p>
						<p>
							성지농장은 산지 3,000평, 평지 4,000 평으로 이루어 진
							개방형 농장입으로서, 일조량이 많아 당도가 높습니다.
						</p>
					</div>
					<div className='FarmInfo_introText2'>
						<h3>
							공룡나라 참다래 농장은 다음의 농법을 사용하여
							재배합니다.
						</h3>
						<ul>
							<li>
								자연농법으로 <span>첨단시설</span>과{" "}
								<span>천연재료를 사용</span>하여 재배합니다.
							</li>
							<li>
								일체의 화학농양이나 비료를 지주 않고{" "}
								<span>유기농법으로 재배</span>합니다.
							</li>
							<li>
								직접 제조한 <span>천연영양제</span>,
								<span>아미노산</span>,<span>해초</span>,
								<span>유산균</span> 등으로 품질을 높입니다.
							</li>
							<li>
								물 맑고 공기 좋고 일조량이 많은{" "}
								<span>경남 고성에서 재배</span>됩니다.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
});
