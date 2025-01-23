import "../css/product-card.css";

export function ProductCard(props) {
  return (
    <div className="product-card-container">
      <div className="product-image" style={{ backgroundImage: `url(${props.image_url})` }}></div>
      <div className="product-card-content">
        <h2 className="product-card-title">
          {props.product_title}
          <span id="product-card-subtitle">{props.product_subtitle}</span>
        </h2>
        <p className="product-card-description">{props.product_description}</p>
        <button href={`${props.button_url}`}>See Demo</button>
      </div>
    </div>
  );
}
