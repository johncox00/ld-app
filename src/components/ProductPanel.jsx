import FlagEvaluator from "./FlagEvaluator";
import PurchaseButton from "./PurchaseButton";

const ExpProductPanel = ({ product }) => {
  return (
    <div>
      <h2>{product.name.fr}</h2>
      <p>{product.price.CA}</p>
      <div  className="product-image" style={{ backgroundImage: `url(${product.img})` }} />
      <p>{product.description.fr}</p>
      <PurchaseButton product={product} />
    </div>
  );
}

const ControlProductPanel = ({ product }) => {
  return (
    <div>
      <h2>{product.name.en}</h2>
      <p>{product.price.US}</p>
      <div  className="product-image" style={{ backgroundImage: `url(${product.img})` }} />
      <p>{product.description.en}</p>
      <PurchaseButton product={product} />
    </div>
  );
};

const ProductPanel = ({ product }) => {
  return (
    <FlagEvaluator
      flagKey="targeted"
      flagValueMap={{
        true: <ExpProductPanel product={product} />,
        false: <ControlProductPanel product={product} />,
      }}
    />
  );
};

export default ProductPanel;
