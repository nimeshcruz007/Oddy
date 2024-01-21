import { useFoodData } from "../context/FoodContext";

function FoodItem({ item }) {
  const { handleOrder } = useFoodData();
  return (
    <div
      className="product-card"
      onClick={() => {
        handleOrder(item.id);
      }}
    >
      <span className="product-card__tag">{item.tag}</span>
      <img src={item.img} alt="fod1" className="product-card__img" />
      <div className="product-card__cont">
        <h3>{item.title}</h3>
        <span className="product-card__price-wraper">
          <span className="product-card__price">₹{item.price}</span>
          <span>/{item.pieces}pcs</span>
        </span>
      </div>
    </div>
  );
}

export default FoodItem;
