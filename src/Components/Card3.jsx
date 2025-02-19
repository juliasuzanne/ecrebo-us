import "../css/card.css";
export function Card3(props) {
  return (
    <div className="card-container-2">
      <div className={`card-content-2 ${props.card_color}`}>
        <div className="card2-image-container">
          <img className="card2-image" src={`${props.image_url}`} />
        </div>
        <div className="card-row">
          <div className="card-title">
            <h2>{props.card_title}</h2>
          </div>
          <p className="card-description-2">{props.card_description}</p>
        </div>
        <div className="card-grid">{props.children}</div>
      </div>
    </div>
  );
}
