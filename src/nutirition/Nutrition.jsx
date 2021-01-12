import { forwardRef } from "react";
import YoutubeIcon from "../YoutubeIcon";
import nutritionBowl from "./kiwi_nutrition_bowl.png";

import "./Nutrition.css";
const crown = (
	<svg
		className='Nutrition_crown'
		viewBox='0 0 100 100'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M 30.000,80.000 L10.000,30.000 Q 36.907,43.937 50.000,20.000 Q 62.566,44.991 90.000,30.000 L70.000,80.000 Z'
			fill='gold'
			stroke='brown'
			strokeWidth={1}
		></path>
	</svg>
);
export default forwardRef((props, ref) => {
	const { className } = props;
	return (
		<div
			ref={ref}
			className={`container Nutrition_container${
				className ? " " + className : ""
			}`}
		>
			<div className='row'>
				<img
					className='col-12 d-md-none Nutrition_introImg'
					src={nutritionBowl}
					alt='키위의 영양'
				/>
				<div className='col-12 col-md-6 col-lg-7'>
					<div className='Nutrition_text Nutrition_text1'>
						<p>
							참다래는 새콤달콤한 맛이 일품일 뿐만 아니라 건강에
							아주 좋은 대표적인 웰빙과일 입니다.
						</p>
						<p>
							미국 식품영양학회를 비롯한 많은 연구 기관에서 아직도
							계속 연구를 하고 있으며, 지금까지 밝혀진 바로는
							비타민(C, E포함 모든 비타민) , 섬유질, 엽산,
							글루타민, 아르기닌, 아미노산, 칼슘과 여러가지 건강에
							필요한 미량원소들까지 가진 종합 영양 식품입니다.
						</p>
					</div>
				</div>
				<img
					className='d-none d-md-flex col-md-6 col-lg-5 Nutrition_introImg'
					src={nutritionBowl}
					alt='키위의 영양'
				/>
				<div className='col-12 col-md-6 Nutrition_box Nutrition_box1'>
					<div className='Nutrition_text Nutrition_text2'>
						<p>
							미국식품영양학회에서 각 과일들의 칼로리 당 영양분을
							분석 비교한 결과, 1위는 <strong>키위</strong>였다.
						</p>
						<p>
							키위는{" "}
							<strong>
								비타민, 섬유질, 나트륨, 광화합물 함유량
							</strong>
							에서 단연 선두를 달리고, 그 중{" "}
							<strong>비타민 E</strong>는 타의 추종을 불허할
							정도였다. 키위는 <strong>글루타민, 아르기닌</strong>
							과 같이 성장을 돕고 노화를 방지하는 아미노산도 다량
							함유하고 있다. 또한 건강에 좋은 과일들 중에서도 특히
							칼로리가 낮고 섬유소가 낮아{" "}
							<strong>다이어트</strong>에 탁월한 효능이 있다.
						</p>
					</div>
					<h3 className='Nutrition_title'>
						<span>미국 식품 영양학회 </span>
						<span>칼로리 당 영양분 Top 10</span>
					</h3>
					<div className='container Nutrition_text3'>
						<div className='row Nutrition_list'>
							<div className='col-xxs-12 col-6'>
								<ul>
									<li className='Nutrition_list_first'>
										키위{crown}
									</li>
									<li>파파야</li>
									<li>멜론</li>
									<li>망고</li>
									<li>레몬</li>
								</ul>
							</div>
							<div className='col-xxs-12 col-6'>
								<ul>
									<li>오렌지</li>
									<li>귤</li>
									<li>유자</li>
									<li>아보카도</li>
									<li>포도</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6 Nutrition_box Nutrition_box2'>
					<div className='Nutrition_text Nutrition_text4'>
						<ul className='Nutrition_health_info_list'>
							<li>
								<div className='Nutrition_health_info_list_index'>
									01
								</div>
								<div>
									<a
										href='https://youtu.be/07QEHRP5Mcs?t=140'
										rel='noreferrer'
										target='_blank'
										className='Nutrition_health_info_list_howto'
									>
										<p>
											키위는 왜 몸에 좋을까요?
											<YoutubeIcon />
										</p>
									</a>
									<p className='Nutrition_health_info_list_howto_desc'>
										키위가 몸에 좋은 이유를 조근 조근 말씀해
										주시네요.
									</p>
								</div>
							</li>
							<li>
								<div className='Nutrition_health_info_list_index'>
									02
								</div>
								<div>
									<a
										href='https://youtu.be/07QEHRP5Mcs?t=495'
										rel='noreferrer'
										target='_blank'
										className='Nutrition_health_info_list_howto'
									>
										<p>
											아무리 좋아도 부작용은 알고
											먹어야겠죠?
											<YoutubeIcon />
										</p>
									</a>
									<ul className='Nutrition_health_info_list_side_effects'>
										<li>
											칼륨함량이 높아 신장에 문제가 있다면
											조심하세요
										</li>
										<li>
											수산함량이 높아 통풍, 류마티스
											관절염이 있다면 조심하세요
										</li>
										<li>
											찬 성질의 과일이므로, 과다섭취 시
											설사를 일으킬 수 있습니다.
										</li>
										<li>
											가려움증이나 키위털 알러지가 있다면
											조심해야 합니다.
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
});
