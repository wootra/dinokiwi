import { forwardRef } from 'react';
import map from './map.png';
import './HowToCome.css';

export default forwardRef((props, ref)=> {
  const {className} = props;
  return (
    <div ref={ref} className={`container HowToCome_container${className ? ' ' + className : ''}`} >
      <div className="row">
        <img
          className="col-xs col-md-6 HowToCome_introImg"
          src={map}
          alt="성지키위농장 지도"
        />
        <div className="col-xs col-md-6">
          <section className="HowToCome_section">
            <header>네비게이션</header>
            <p>
              경남 고성군 하이면 <span>공룡로 313</span>
            </p>
          </section>
          <section className="HowToCome_section">
            <header>버스</header>
            <p>
              경남 삼천포까지 오셔서 건너편 길 버스 정류장에서 <span>월흥</span>편 버스 탑승, 
              월흥마을 입구에서 하차. 
              갈래 길에서 우측으로 200미터 도보 후 길 좌측 빨간 기와 집
            </p>
          </section>
          <section className="HowToCome_section">
            <header>택시</header>
            <p>
              삼천포 터미널 앞에서 택시 승차 후 <span>월흥 성지키위농장</span> 말씀하시면 됩니다. 
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
});