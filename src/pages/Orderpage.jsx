import PageNav from "../components/Pagenav";
import OrderSection from "../components/OrderSection";
import OrderCart from "../components/OrderCart";

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
