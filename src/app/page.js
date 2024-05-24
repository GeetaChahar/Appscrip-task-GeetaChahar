"use client";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function Home() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex mt-12 justify-center">
        <Cart state={state} dispatch={dispatch} />
        <Products state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default Home;
