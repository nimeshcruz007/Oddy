import OrderHeader from "./OrderHeader";
import FoodProducts from "./FoodProducts";
function OrderSection() {
  return (
    <div className="order-sec">
      <OrderHeader />
      <FoodProducts />
    </div>
  );
}
export default OrderSection;
