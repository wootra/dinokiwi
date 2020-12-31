import './Header.css';
import logo from './kiwi_logo.png';

function Header() {
  return (
    <header className="Header_container">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
