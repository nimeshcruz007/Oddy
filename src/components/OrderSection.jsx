import OrderHeader from "./OrderHeader";
import FoodProducts from "./FoodProducts";
import { FoodProvider } from "../context/FoodContext";
function OrderSection() {
  return (
    <div className="order-sec">
      <FoodProvider>
        <OrderHeader />
        <FoodProducts />
      </FoodProvider>
    </div>
  );
}
export default OrderSection;
