import './App.css';
import Footer from './footer/Footer';
import FarmInfo from './info/FarmInfo';
import Market from './market/Market';
import UnderConstruction from './under-construction/UnderConstruction';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <content className="App-content">
        <FarmInfo />
        <Market />
        <UnderConstruction />
      </content>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
