import "../css/product-card.css";

export function ProductCard(props) {
  return (
    <div className="product-card-container" onClick={() => window.open(`${props.button_url}`)}>
      <div className="product-image-container">
        <div className="product-image" style={{ backgroundImage: `url(${props.image_url})` }}></div>
      </div>
      <div className="product-card-content">
        <h2 className="product-card-title">
          {props.product_title}
          <br />
          <span id="product-card-subtitle">{props.product_subtitle}</span>
        </h2>
        <p className="product-card-description">{props.product_description}</p>
        <div className="demo-button-container">
          <h5 onClick={() => window.open(`${props.button_url}`)} className="demo-button">
            {" "}
            See Demo
          </h5>
          <span className="arrow"></span>
          <img className="product-icon" src={`${props.icon_url}`} />
        </div>
      </div>
    </div>
  );
}
