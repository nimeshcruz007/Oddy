import OrderProducts from "./OrderProducts.jsx";
import AmountDetails from "./AmountDetails.jsx";

import { useFoodData } from "../context/FoodContext.jsx";

function OrderCart() {
  const { order } = useFoodData();
  return (
    order.length != 0 && (
      <div className="cart order-cart">
        <h2>Current Order</h2>
        <div className="order-cart__orders">
          <OrderProducts />
        </div>
        <AmountDetails />
        <button className="order-cart__btn">Take Order</button>
      </div>
    )
  );
}

export default OrderCart;
