import marketLogo from './hd_logo.gif';

function Market() {
  return (
    <div className="App-market">
      판매처 :{' '}
      <a href="http://www.edinomall.com/shop/goods/goods_search.php?searched=Y&log=1&skey=all&hid_pr_text=&hid_link_url=&edit=&sword=%B0%F8%B7%E6%B3%AA%B6%F3%C2%FC%B4%D9%B7%A1%B3%F3%C0%E5&x=33&y=27">
        <img src={marketLogo} alt="공룡나라 쇼핑몰 로고" />
      </a>
    </div>
  );
}

export default Market;
