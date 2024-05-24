import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="flex flex-wrap justify-evenly gap-4 w-[80%] mx-6">
      {products.map((prod) => (
        <div
          key={prod.id}
          className="flex flex-col p-6 bg-gray-100 shadow-md w-full md:w-[47%] lg:w-[30%] mt-2 gap-6 rounded-md"
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            className="object-cover h-60"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: {
                    id: prod,
                  },
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    _qty: 1,
                    price: prod.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
