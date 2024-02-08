import PageNav from "../components/order/Pagenav";
import OrderSection from "../components/order/OrderSection";
import OrderCart from "../components/order/OrderCart";

import { FoodProvider } from "../context/FoodContext";

function Orderpage() {
  return (
    <div className="order-page">
      <div className="pagenav">
        <PageNav />
      </div>
      <FoodProvider>
        <OrderSection />
        <OrderCart />
      </FoodProvider>
    </div>
  );
}

export default Orderpage;
