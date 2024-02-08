import { useFoodData } from "../../context/FoodContext";

function OrderedItem({ item }) {
  const { increaseItem, decreaseItem, handleRemove } = useFoodData();

  return (
    <div className="order-card">
      <span
        className="order-card__remove"
        onClick={() => handleRemove(item.id)}
      >
        &#10060;
      </span>
      <img src={item.img} className="order-card__img" />
      <div className="order-card__content">
        <h5>{item.title}</h5>
        <span className="order-card__price">
          ₹{item.price}
          <div className="item-count">
            <button onClick={() => decreaseItem(item.id)}>-</button>
            {item.pieces}
            <button onClick={() => increaseItem(item.id)}>+</button>
          </div>
        </span>
      </div>
    </div>
  );
}

export default OrderedItem;
