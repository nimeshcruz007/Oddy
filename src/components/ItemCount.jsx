import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);
  function increase() {
    setCount((count) => count + 1);
  }

  function decrease() {
    setCount((count) => count - 1);
  }

  return (
    <div className="item-count">
      <button onClick={() => decrease()}>-</button>
      {count}
      <button onClick={() => increase()}>+</button>
    </div>
  );
}

export default ItemCount;
