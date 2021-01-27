import { forwardRef } from "react";
import YoutubeIcon from "../YoutubeIcon";
import howToEat from "./how-to-eat.png";
import "./HowToEat.css";
export default forwardRef((props, ref) => {
	const { className } = props;
	return (
		<div
			ref={ref}
			className={`container HowToEat_container${
				className ? " " + className : ""
			}`}
			id='howToEat'
		>
			<div className='row'>
				<img
					className='col-12 d-md-none HowToEat_introImg'
					src={howToEat}
					loading='lazy'
					alt='보관방법'
				/>
				<div className='col-12 col-md-6 col-lg-7'>
					<div className='HowToEat_list'>
						<ul>
							<li>
								<div className='HowToEat_index'>01</div>
								<div>
									<a
										href='https://youtu.be/gcZoW1uaq_8'
										rel='noreferrer'
										target='_blank'
										className='HowToEat_howto'
									>
										<p>
											보통은 껍질을 벗기죠? 껍질째로
											드세요
											<YoutubeIcon />
										</p>
									</a>
									<p className='HowToEat_howto_desc'>
										우리가 잘못 알고 있었던 상식! 내몸
										사용설명서 유튜브 비디오(2분 30초)
									</p>
								</div>
							</li>
							<li>
								<div className='HowToEat_index'>02</div>
								<div>
									<a
										href='https://youtu.be/A6rFaknuUlw'
										rel='noreferrer'
										target='_blank'
										className='HowToEat_howto'
									>
										<p>
											털 알러지가 있다면 껍질은 까고
											먹어야겠죠? 숟가락으로 쉽게 껍질을
											까세요!
											<YoutubeIcon />
										</p>
									</a>
									<p className='HowToEat_howto_desc'>
										영어 나온다고 겁내지 마세요. 소리 없어도
										다 이해됩니다.(46초)
									</p>
								</div>
							</li>
							<li>
								<div className='HowToEat_index'>03</div>
								<div>
									<a
										href='https://youtu.be/07QEHRP5Mcs?t=565'
										rel='noreferrer'
										target='_blank'
										className='HowToEat_howto'
									>
										<p>
											살짝 익혀서 드세요!
											<YoutubeIcon />
										</p>
									</a>
									<p className='HowToEat_howto_desc'>
										체내 흡수율을 높일 수 있다고 하네요
									</p>
								</div>
							</li>
							<li>
								<div className='HowToEat_index'>04</div>
								<div>
									<a
										href='https://youtu.be/GvzRJ4U_tS0'
										rel='noreferrer'
										target='_blank'
										className='HowToEat_howto'
									>
										<p>
											키위 드레싱 만드는 법!
											<YoutubeIcon />
										</p>
									</a>
									<p className='HowToEat_howto_desc'>
										이 분 말씀 구수히 하시네요. 앞에서 약
										1분 30초간은 드레싱, 이후는 샐러드
										만드는 법입니다.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<img
					className='d-none d-md-flex col-md-6 col-lg-5 HowToEat_introImg'
					src={howToEat}
					loading='lazy'
					alt='보관방법'
				/>
			</div>
		</div>
	);
});
