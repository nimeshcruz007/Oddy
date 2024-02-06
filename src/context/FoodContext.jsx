import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  message: [],
  foods: [],
  order: [],
};

const BASE_URL = "http://localhost:8000";

const FoodContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "error":
      return { ...state, error: action.payload };
    case "warning":
      return {
        ...state,
        message: [{ type: "warning", content: action.payload }],
      };
    case "food/loaded":
      return { ...state, loading: false, foods: action.payload };
    case "food/order":
      return {
        ...state,
        message: [],
        loading: false,
        order: [
          ...state.order,
          state.foods.find((item) => item.id === action.payload),
        ],
      };
    case "incre/order":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === action.payload) {
            return { ...item, pieces: item.pieces + 1 };
          } else {
            return { ...item };
          }
        }),
      };

    case "decre/order":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === action.payload) {
            return { ...item, pieces: item.pieces - 1 };
          } else {
            return { ...item };
          }
        }),
      };
    case "remove/order":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload),
      };
    // case "take/order":
    //   return {
    //     ...state,
    //   };
    case "success/order": {
      return {
        ...state,
        order: [],
        message: [{ type: "success", content: "order placed" }],
      };
    }
  }
}

function FoodProvider({ children }) {
  const [{ loading, error, message, foods, order }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //handle duplication of item in an order
  function handleOrder(id) {
    const result = order.find((element) => element.id === id);
    if (result) {
      dispatch({
        type: "warning",
        payload: "Oops,the item is already ordered",
      });
    } else {
      dispatch({ type: "food/order", payload: id });
    }
  }

  function increaseItem(id) {
    dispatch({ type: "incre/order", payload: id });
  }

  function decreaseItem(id) {
    const item = order.filter((item) => item.id === id);
    if (item[0].pieces > 1) {
      console.log("called");
      dispatch({ type: "decre/order", payload: id });
    } else {
      return;
    }
  }

  function handleRemove(id) {
    dispatch({ type: "remove/order", payload: id });
  }

  // function takeOrder() {
  //   dispatch({ type: "take/order" });
  // }

  async function takeOrder(data) {
    if (order.length === 0) return;
    try {
      const res = await fetch(`${BASE_URL}/order`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const mesg = res.json();
      console.log(mesg.promistate);
      dispatch({ type: "success/order" });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(function () {
    async function fetchData() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/food`);
        const data = await res.json();
        dispatch({ type: "food/loaded", payload: data });
      } catch {
        dispatch({ type: "error", payload: "Something wrong with the server" });
      }
    }
    fetchData();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        loading,
        error,
        foods,
        order,
        handleOrder,
        increaseItem,
        decreaseItem,
        message,
        handleRemove,
        // takeOrder,
        takeOrder,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

function useFoodData() {
  const context = useContext(FoodContext);
  if (context === undefined)
    throw new Error(
      "useFoodData need to be initialized within the FoodProvider"
    );
  return context;
}

export { FoodProvider, useFoodData };
