import "../css/product-card.css";

export function ProductCard(props) {
  return (
    <div className="product-card-container" onClick={() => window.open(`${props.button_url}`)}>
      <a href={`${props.button_url}`}>
        <div className="product-image-container">
          <div className="product-image" style={{ backgroundImage: `url(${props.image_url})` }}></div>
        </div>
        <div className="product-card-content">
          <div>
            <h2 className="product-card-title">
              {props.product_title}
              <br />
              <span id="product-card-subtitle">{props.product_subtitle}</span>
            </h2>
          </div>
          <div>
            <p className="product-card-description">{props.product_description}</p>
          </div>
          <div className="demo-button">
            <a href={`${props.button_url}`}>
              <button> See Demo</button>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
