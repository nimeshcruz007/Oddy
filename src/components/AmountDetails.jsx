import { useFoodData } from "../context/FoodContext";

function AmountDetails() {
  const { order } = useFoodData();

  const totalPrice = order.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  const taxAmt = (totalPrice * 18) / 100;
  const totalAmt = totalPrice + taxAmt;

  return (
    order.length != 0 && (
      <div className="total-amount" style={{ alignSelf: "flex-end" }}>
        <p>
          <span>Total : </span>
          <span>₹{totalPrice}.0</span>
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
