import { forwardRef } from 'react';
import marketLogo from './hd_logo.gif';
import { getUrl } from './marketUtil';

export default forwardRef((props, ref)=> {
  const {className} = props;
  return (
    <div ref={ref} className={`App-market${className ? ' ' + className : ''}`}>
      판매처 :{' '}
      <a href={getUrl()}>
        <img src={marketLogo} alt="공룡나라 쇼핑몰 로고" />
      </a>
    </div>
  );
});
