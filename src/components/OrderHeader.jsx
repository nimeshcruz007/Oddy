import { useState } from "react";
import Search from "./Search";
function ItemList() {
  const [queryItem, setQueryItem] = useState("search");
  return (
    <div className="order-header">
      <span className="order-header__cont">
        <h3>Welcome David</h3>
        <p>Forget Everything, deliver with a smile</p>
      </span>
      <Search query={queryItem} setQuery={setQueryItem} />
    </div>
  );
}

export default ItemList;
