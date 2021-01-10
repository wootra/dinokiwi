import marketLogo from './hd_logo.gif';
import { getUrl } from './marketUtil';

function Market() {
  return (
    <div className="App-market">
      판매처 :{' '}
      <a href={getUrl()}>
        <img src={marketLogo} alt="공룡나라 쇼핑몰 로고" />
      </a>
    </div>
  );
}

export default Market;
