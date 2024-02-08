import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  orders: [],
};

const BackendContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "fetch/order":
      return {
        ...state,
        orders: action.payload,
      };
  }
}

const BASE_URL = "http://localhost:8000";

function BackendDataProvider({ children }) {
  const [{ orders }, dispatch] = useReducer(reducer, initialState);

  useState(() => {
    async function fetchOrders() {
      try {
        const res = await fetch(`${BASE_URL}/order`);
        const data = await res.json();
        dispatch({ type: "fetch/order", payload: data });
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <BackendContext.Provider
      value={{
        orders,
      }}
    >
      {children}
    </BackendContext.Provider>
  );
}

function useBackend() {
  return useContext(BackendContext);
}
export { BackendDataProvider, useBackend };
