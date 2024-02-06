import { useFoodData } from "../context/FoodContext";

function AmountDetails({ price, totalAmt, taxAmt }) {
  const { order } = useFoodData();

  return (
    order.length != 0 && (
      <div className="total-amount" style={{ alignSelf: "flex-end" }}>
        <p>
          <span>Price : </span>
          <span>₹{price}.0</span>
        </p>
        <p>
          <span>Tax(18%) : </span>
          <span>₹{taxAmt}</span>
        </p>
        <p>
          <span>Subtotal : </span>
          <span>₹{totalAmt}</span>
        </p>
        <p>
          <span>
            <b>Total : </b>
          </span>
          <span>
            <b>₹{totalAmt}</b>
          </span>
        </p>
      </div>
    )
  );
}

export default AmountDetails;
