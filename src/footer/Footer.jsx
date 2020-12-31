import './Footer.css';

function Footer(props) {
  let className = 'Footer_container';
  if (props.className) className = className + ' ' + props.className;
  return (
    <footer className={className}>copyright 공룡나라참다래@2020 since 1987</footer>
  );
}

export default Footer;
