import { useEffect } from 'react';
import './Header.css';
import logo from './kiwi_logo.png';

function Header(props) {

  useEffect(()=>{
    const evListener = e=>{
      const img = document.getElementById('Header_image');
      const sticky = document.getElementById('Header_sticky');
      const imgHeight = img.clientHeight;
      const pos = window.pageYOffset / imgHeight;
      img.style.opacity = 1.0 - pos;
      sticky.style.opacity = pos;
      // console.log({
      //   offset: window.pageYOffset, 
      //   height: document.getElementById('Header_image').clientHeight
      // });
      
    };
    document.addEventListener("scroll", evListener)
    console.log("header-start");
    return ()=>{
      console.log("header-finish")
      document.removeEventListener("scroll", evListener);
    }
  }, []);
  return (
    <header className={`Header_container ${props.className}`}>
      <div className="Header_sticky" id="Header_sticky">
        공룡나라참다래
      </div>
      <img src={logo} alt="logo" className="Header_image" id="Header_image" />

    </header>
  );
}

export default Header;
