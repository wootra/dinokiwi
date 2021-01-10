import './App.css';
import Footer from './footer/Footer';
import FarmInfo from './info/FarmInfo';
import Market from './market/Market';
import UnderConstruction from './under-construction/UnderConstruction';
import Header from './header/Header';
import Navigator from './navigator/Navigator';
import NavDrawer from './navigator/NavDrawer';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      {/* <Navigator className="App-navigator" /> */}
      <NavDrawer className="App-navigator" />
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
