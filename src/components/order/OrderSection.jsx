import OrderHeader from "./OrderHeader";
import FoodProducts from "./FoodProducts";
import { useFoodData } from "../../context/FoodContext";
function OrderSection() {
  const { message } = useFoodData();

  return (
    <div className="order-sec">
      {message.length !== 0 && (
        <div className={`notification ${message[0].type}`}>
          {message[0].content}
        </div>
      )}
      <OrderHeader />
      <FoodProducts />
    </div>
  );
}
export default OrderSection;
