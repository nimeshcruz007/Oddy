import { SwiperSlide } from "swiper/react";
import FoodData from "./FoodData";
import "swiper/css";

function FoodItem({ item }) {
  return (
    <>
      <SwiperSlide>
        <FoodData data={item} />
      </SwiperSlide>
    </>
  );
}

export default FoodItem;
