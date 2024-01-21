import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
  foods: [],
  selectedItem: 0,
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
        selectedItem: action.payload,
      };
  }
}

function FoodProvider({ children }) {
  const [{ loading, error, foods, orders }, dispatch] = useReducer(
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
    <FoodContext.Provider
      value={{ loading, error, foods, orders, handleOrder, dispatch }}
    >
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
