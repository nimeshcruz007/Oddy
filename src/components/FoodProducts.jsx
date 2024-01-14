import { Swiper, SwiperSlide } from "swiper/react";
import FoodItem from "./FoodItem";

const products = [
  {
    tag: "Chicken",
    img: "/images/food1.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Chicken",
    img: "/images/food2.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Chicken",
    img: "/images/food2.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Chicken",
    img: "/images/food3.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Drinks",
    img: "/images/food3.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Drinks",
    img: "/images/food3.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Drinks",
    img: "/images/food3.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
  {
    tag: "Drinks",
    img: "/images/food3.png",
    title: "Almond Brown Sugar Cossiant",
    price: 120,
    pieces: 3,
  },
];
function FoodProducts() {
  return (
    <div>
      <Swiper>
        {products.map((item, key) => (
          <SwiperSlide key={key}>
            <FoodItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FoodProducts;
