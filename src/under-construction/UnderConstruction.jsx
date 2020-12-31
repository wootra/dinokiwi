import comingSoon from './coming-soon.jpg';
import './UnderConstruction.css';

function UnderConstruction() {
  return (
    <div className="UnderConstruction-container">
      <img src={comingSoon} alt="under construction" />
    </div>
  );
}

export default UnderConstruction;
