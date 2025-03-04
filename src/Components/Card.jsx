import "../css/card.css";
export function Card(props) {
  return (
    <div className={`card-container ${props.additional_class}`}>
      <div className={`card-content ${props.card_color}`}>
        <div className="card-title">
          <h3>{props.card_pretitle}</h3>
          <h2>{props.card_title}</h2>
        </div>
        <div className={`card-icon ${props.icon_color}`}>
          <img alt={props.image_alt} src={props.icon_url} />
        </div>
        <p className="card-description">{props.card_description}</p>
        <div className="card-grid">{props.children}</div>
      </div>
    </div>
  );
}
