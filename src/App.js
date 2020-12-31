import farm from './farm_img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={farm} alt="성지키위농장 설명" />
      </header>
      <content>
        <p>공사중</p>
        <div>
          판매처 :{' '}
          <a href="http://www.edinomall.com/shop/goods/goods_search.php?searched=Y&log=1&skey=all&hid_pr_text=&hid_link_url=&edit=&sword=%B0%F8%B7%E6%B3%AA%B6%F3%C2%FC%B4%D9%B7%A1%B3%F3%C0%E5&x=33&y=27">
            공룡나라쇼핑몰
          </a>
        </div>
      </content>
    </div>
  );
}

export default App;
