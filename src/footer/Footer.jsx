import "./Footer.css";

function Footer(props) {
	let className = "Footer_container";
	if (props.className) className = className + " " + props.className;
	return (
		<footer className={className}>
			<p className='Footer_copyright'>
				copyright 2021. 공룡나라참다래농장 (성지키위농장) since 1987 all
				rights reserved
			</p>
			<p>
				<span>사업자 등록 번호: 612-90-89115</span>
				<span>통신 판매 번호: 2009-경남고성-0003</span>
				<span>신고기관명 : 경상남도 고성군청 (055-670-2325)</span>
			</p>
		</footer>
	);
}

export default Footer;
