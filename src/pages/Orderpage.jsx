import PageNav from "../components/Pagenav";
import OrderSection from "../components/OrderSection";
import OrderCart from "../components/OrderCart";

function Orderpage() {
  return (
    <div className="order-page">
      <div className="pagenav">
        <PageNav />
      </div>
      <OrderSection />
      <OrderCart />
    </div>
  );
}

export default Orderpage;
