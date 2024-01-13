function Fooddata({ data }) {
  return (
    <div className="product-card">
      <img src={data.img} alt="fod1" className="product-card__img" />
      <div className="product-card__cont">
        <h3>{data.title}</h3>
        <span className="product-card__price-wraper">
          <span className="product-card__price">₹{data.price}/</span>
          <span>{data.pieces}pcs</span>
        </span>
      </div>
    </div>
  );
}
export default Fooddata;
