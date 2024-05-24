import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;

  const [total, setTotal] = useState(0);

  const items = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "SUITABLE FOR",
    "PATTERN",
  ];

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col m-2 p-6 rounded-md max-sm:hidden w-[30%] lg:w-[20%]">
        <b className="text-center text-2xl">Cart</b>
        <b style={{ alignSelf: "center" }}>Subtotal: $ {total}</b>

        <div className="flex flex-col w-full">
          {cart.length > 0 ? (
            cart.map((prod) => (
              <div
                key={prod.title}
                style={{
                  display: "flex",
                  padding: 10,
                  border: "1px solid grey",
                  margin: 5,
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: 10 }}>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    style={{ height: 70, objectFit: "cover" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <span>{prod.title}</span>
                    <b>$ {prod.price}</b>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                    -
                  </button>
                  <span>{prod.qty}</span>
                  <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <span style={{ padding: 20, alignSelf: "center" }}>
              Cart is empty
            </span>
          )}
        </div>

        {items.map((item, index) => (
          <div key={item} className="flex flex-col mb-4">
            <h5 className="flex justify-between cursor-pointer">
              <b>{item}</b>
              <span>&#11167;</span>
            </h5>
            <h5 className="pb-4 text-gray-700">All</h5>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
