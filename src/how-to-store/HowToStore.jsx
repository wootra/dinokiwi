import { forwardRef } from "react";
import howToStore from "./how_to_store.png";
import "./HowToStore.css";
export default forwardRef((props, ref) => {
	const { className } = props;
	return (
		<div
			ref={ref}
			className={`container HowToStore_container${
				className ? " " + className : ""
			}`}
		>
			<div className='row'>
				<img
					className='col-12 d-md-none HowToStore_introImg'
					src={howToStore}
					alt='보관방법'
				/>
				<div className='col-12 col-md-6 col-lg-7'>
					<div className='HowToStore_list'>
						<ul>
							<li>
								<div className='HowToStore_index'>01</div>
								<div>
									<p className='HowToStore_howto'>
										상온이나 약간 서늘한 곳에서 비닐에 싸서
										수분이 증발하지 않도록 보관해 주세요.
									</p>
									<p className='HowToStore_howto_desc'>
										따뜻한 곳에 두면 일주일 정도면 익습니다.
									</p>
								</div>
							</li>
							<li>
								<div className='HowToStore_index'>02</div>
								<div>
									<p className='HowToStore_howto'>
										살짝 눌러서 탄력이 있게 들어가면 알맞게
										익은 겁니다.
									</p>
									<p className='HowToStore_howto_desc'>
										이 때부터 냉장고에 보관하세요
									</p>
								</div>
							</li>
							<li>
								<div className='HowToStore_index'>03</div>
								<div>
									<p className='HowToStore_howto'>
										빨리 익혀 먹으려면 사과조각과 함께
										보관하세요.
									</p>
									<p className='HowToStore_howto_desc'>
										사과가 없다면 단단한 상태에서 약 5~7일,
										사과를 넣으면 약 3~5일이면 익습니다.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<img
					className='d-none d-md-flex col-md-6 col-lg-5 HowToStore_introImg'
					src={howToStore}
					alt='보관방법'
				/>
			</div>
		</div>
	);
});
