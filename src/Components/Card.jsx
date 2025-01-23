import "../css/card.css";
export function Card(props) {
  return (
    <div className="card-container">
      <div className={`card-icon ${props.card_color}`}>
        <img src={props.icon_url} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.card_title}</h2>
        <hr></hr>
        <p className="card-description">{props.card_description}</p>
      </div>
    </div>
  );
}
