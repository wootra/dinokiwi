import './App.css';
import Footer from './footer/Footer';
import FarmInfo from './info/FarmInfo';
import Market from './market/Market';
import Header from './header/Header';
import NavDrawer from './navigator/NavDrawer';
import Nutrition from './nutirition/Nutrition';
import { createRef} from 'react';
import HowToStore from './how-to-store/HowToStore';
import HowToEat from './how-to-eat/HowToEat';
import HowToCome from './how-to-come/HowToCome';


function App() {

  
const menus = {
  farmIntro: {text: "농장소개", ref: createRef()},
  nutrition: {text: "참다래 영양", ref: createRef()},
  howToStore: {text: "보관방법", ref: createRef()},
  howToEat: {text: "어떻게 먹지?", ref: createRef()},
  howToCome: {text: "오시는 길", ref: createRef()},
  market: {text: "마켓", ref: createRef()}
};

const items =[
  menus.farmIntro,
  menus.nutrition,
  menus.howToStore,
  menus.howToEat,
  menus.howToCome,
  menus.market
];
  return (
    <div className="App">
      <NavDrawer className="App-navigator" items={items} />
      <Header className="App-header" />
      {/* <Navigator className="App-navigator" /> */}
      
      <content className="App-content">
        <FarmInfo ref={menus.farmIntro.ref}/>
        <hr/>
        <Nutrition ref={menus.nutrition.ref}/>
        <hr/>
        <HowToStore ref={menus.howToStore.ref} />
        <hr/>
        <HowToEat ref={menus.howToEat.ref} />
        <hr/>
        <Market ref={menus.market.ref} />
        <hr/>
        <HowToCome ref={menus.howToCome.ref}/>
        <hr/>
        <div className="App-farm-outside"/>
      </content>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
