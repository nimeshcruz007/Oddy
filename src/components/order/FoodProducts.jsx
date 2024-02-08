import FoodItem from "./FoodItem";
import { useFoodData } from "../../context/FoodContext";

function FoodProducts() {
  const { foods } = useFoodData();

  return (
    <div className="food-product">
      <div className="food-product__wrapper">
        {foods.map((item, key) => {
          return <FoodItem item={item} styleClass={"foodList"} key={key} />;
        })}
      </div>
    </div>
  );
}

export default FoodProducts;
