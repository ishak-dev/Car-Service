import React, { useEffect, useState } from "react";
import "../style/pages/cart.css";
import CartItem from "../components/cart/cartItem";
import { getPartById, postOrder } from "../api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const [cart, setCart] = useState();
  const [articleData, setArticleData] = useState([]);
  const [articleDeleted, setArticleDeleted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [counter, setCounter] = useState(0);
  const getCart = () => {
    setCart(localStorage.getItem("itemId"));
  };

  useEffect(() => {
    getCart();
    counter > 0 && toast.info("You removed an item");
  }, [counter]);

  useEffect(() => {
    if (cart != null) {
      getPartById(cart).then((data) => setArticleData(data));
    }
  }, [cart]);

  return (
    <div className="cart-section">
      <h2>My Cart</h2>

      <div className="cart-item-container">
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Price</th>
            </tr>
          </thead>
          {cart ? (
            <CartItem
              img={articleData.photo_link}
              name={articleData.name}
              description={articleData.description}
              price={articleData.price}
              setCounter={setCounter}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          ) : (
            <tbody style={{ color: "black" }}>
              <tr>
                <td>
                  <h3>No items in cart</h3>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      {cart ? (
        <button
          className="confirm-cart-btn"
          onClick={() => {
            {
              postOrder(quantity);
              localStorage.removeItem("itemId");
              setCounter((prevState) => prevState + 1);
              toast.success("You successfully orderd an item");
            }
          }}
        >
          PURCHASE
        </button>
      ) : (
        ""
      )}
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default Cart;
