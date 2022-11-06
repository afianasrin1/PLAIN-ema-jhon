import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart } from "../../utilities/fakedb";
const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    // console.log(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No items for review.please <Link to="/">show more</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/shipping">
            <button>Process Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
