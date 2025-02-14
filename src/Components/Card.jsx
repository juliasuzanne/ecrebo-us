import "../css/card.css";
export function Card(props) {
  return (
    <div className="card-container">
      <div className={`card-icon ${props.icon_color}`}>
        <img src={props.icon_url} />
      </div>
      <div className={`card-content ${props.card_color}`}>
        <h2 className="card-title">{props.card_title}</h2>
        <br></br>
        <p className="card-description">{props.card_description}</p>
      </div>
    </div>
  );
}
