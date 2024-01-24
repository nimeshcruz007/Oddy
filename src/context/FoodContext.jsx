import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
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
    case "food/loaded":
      return { ...state, loading: false, foods: action.payload };
    case "food/order":
      return {
        ...state,
        loading: false,
        order: [
          ...state.order,
          state.foods.find((item) => item.id === action.payload),
        ],
      };
  }
}

function FoodProvider({ children }) {
  const [{ loading, error, foods, order }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function handleOrder(id) {
    dispatch({ type: "food/order", payload: id });
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
    <FoodContext.Provider value={{ loading, error, foods, order, handleOrder }}>
      {children}
    </FoodContext.Provider>
  );
}

function useFoodData() {
  const context = useContext(FoodContext);
  if (context === undefined)
    throw new Error(
      "useFoodData need to be initialized within the FoodProvider",
    );
  return context;
}

export { FoodProvider, useFoodData };
