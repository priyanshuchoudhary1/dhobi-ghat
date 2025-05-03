import React from "react";
import { FaTrashAlt, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, deleteItem } = useCart();

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-title">
        <FaShoppingBag className="icon-bag" />
        Cart Summary
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-message">Your cart is empty!</div>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-price">
                  ₹{item.price} x {item.quantity}
                </div>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteItem(item.name, item.category)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        Total: ₹{getTotalCost()}
      </div>

      <div className="payment-section">
        <Link to="/payment">
          <button className="payment-btn">Proceed to Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
