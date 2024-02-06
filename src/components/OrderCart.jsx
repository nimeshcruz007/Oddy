import OrderProducts from "./OrderProducts.jsx";
import AmountDetails from "./AmountDetails.jsx";

import { useFoodData } from "../context/FoodContext.jsx";

function OrderCart() {
  const { order, takeOrder } = useFoodData();

  const price = order.reduce(
    (accumulator, currentValue) =>
      (accumulator + currentValue.price) * currentValue.pieces,
    0
  );
  const taxAmt = (price * 18) / 100;
  const totalAmt = Math.floor(price + taxAmt);

  function handleOrder() {
    const data = {
      id: 12345,
      order,
      table: 1,
      amount: totalAmt,
    };
    takeOrder(data);
  }

  return (
    order.length != 0 && (
      <div className="cart order-cart">
        <h2>Current Order</h2>
        <div className="order-cart__orders">
          <OrderProducts />
        </div>
        <AmountDetails price={price} taxAmt={taxAmt} totalAmt={totalAmt} />
        <button onClick={() => handleOrder()} className="order-cart__btn">
          Take Order
        </button>
      </div>
    )
  );
}

export default OrderCart;
