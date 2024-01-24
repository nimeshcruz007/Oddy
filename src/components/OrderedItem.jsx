import ItemCount from "./ItemCount";
function OrderedItem({ item }) {
  return (
    <div className="order-card">
      <img src={item.img} className="order-card__img" />
      <div className="order-card__content">
        <h5>{item.title}</h5>
        <span className="order-card__price">
          ₹{item.price}
          <ItemCount />
        </span>
      </div>
    </div>
  );
}

export default OrderedItem;
