import { useFoodData } from "../../context/FoodContext";

function FoodItem({ item, styleClass }) {
  const { handleOrder } = useFoodData();
  return (
    <div
      className={styleClass}
      onClick={() => {
        handleOrder(item.id);
      }}
    >
      <span className="product-card__tag">{item.tag}</span>
      <img src={item.img} alt="fod1" className="product-card__img" />
      <div className="product-card__cont">
        <h5>{item.title}</h5>
        <span className="product-card__price-wraper">
          <span className="product-card__price">₹{item.price}.00</span>
        </span>
      </div>
    </div>
  );
}

export default FoodItem;
