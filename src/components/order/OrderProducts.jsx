import { useFoodData } from "../../context/FoodContext";
import OrderedItem from "./OrderedItem";

function OrderProducts() {
  const { order } = useFoodData();
  return order.map((item) => <OrderedItem key={item.id} item={item} />);
}

export default OrderProducts;
