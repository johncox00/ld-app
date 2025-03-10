import { useLDClient } from "launchdarkly-react-client-sdk";
import FlagEvaluator from "./FlagEvaluator";
const ExpPurchaseButton = ({ product }) => {
  const ldClient = useLDClient();

  const clicked = () => {
    ldClient.track("purchase-clicked", { productId: product.id });
    alert("Merci pour votre achat!");
  }

  return (
    <div>
      <button name="buy" onClick={clicked} className="btn btn-primary">Acheter Maintenant</button>
    </div>
  );
};

const ControlPurchaseButton = ({ product }) => {
  const ldClient = useLDClient();

  const clicked = () => {
    ldClient.track("purchase-clicked", { productId: product.id });
    alert("Thank you for your purchase!");
  }

  return (
    <div>
      <button name="buy" onClick={clicked} className="btn btn-primary">Buy Now</button>
    </div>
  );
};

const PurchaseButton = ({ product }) => {
  return (
    <FlagEvaluator
      flagKey="targeted"
      flagValueMap={{
        true: <ExpPurchaseButton product={product} />,
        false: <ControlPurchaseButton product={product} />,
      }}
    />
  );
};

export default PurchaseButton;
