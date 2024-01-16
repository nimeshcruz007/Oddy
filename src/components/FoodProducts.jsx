import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";

import FoodItem from "./FoodItem";

import "swiper/css";

const BASE_URL = "http://localhost:8000";
function FoodProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(function () {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/food`);
        const data = await res.json();
        setFoods(data);
      } catch {
        setError("Something wrong with the server");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Swiper spaceBetween={30} slidesPerView={3}>
        {foods.map((item, key) => {
          return <FoodItem item={item} key={key} />;
        })}
      </Swiper>
    </div>
  );
}

export default FoodProducts;
