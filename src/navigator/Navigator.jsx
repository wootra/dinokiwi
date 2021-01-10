import './Navigator.css';

const menu = [
  ['성지농장은요...'],
  ['참다래는...']
];

function Navigator(props) {
  const size = 12 / menu.length;
  return (
    <div className={`container Navigator-container ${props.className}`}>
      <div className="row">
        {menu.map((item, idx) => (
          <div
            key={idx}
            className={`col col-md-${size} Navigator-menu Navigator-menu${idx}`}
          >
            <span>{item[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigator;
