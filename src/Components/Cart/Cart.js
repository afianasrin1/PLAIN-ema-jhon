import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.01;
  return (
    <div className="cart-summary">
      <h1>order summary </h1>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping:${shipping}</p>
      <p>Tax:${tax}</p>
      <h5>Grand Total:</h5>
    </div>
  );
};

export default Cart;
