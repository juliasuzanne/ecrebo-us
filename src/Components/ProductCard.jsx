import "../css/product-card.css";

export function ProductCard(props) {
  return (
    <div className="product-card-container">
      <a href={`${props.button_url}`}>
        <div className="product-image-container">
          <div className="product-image" style={{ backgroundImage: `url(${props.image_url})` }}></div>
        </div>
        <div className="product-card-content">
          <h2 className="product-card-title">
            {props.product_title}
            <span id="product-card-subtitle">{props.product_subtitle}</span>
          </h2>
          <p className="product-card-description">{props.product_description}</p>
          <a href={`${props.button_url}`}>
            <button> See Demo</button>
          </a>
        </div>
      </a>
    </div>
  );
}
