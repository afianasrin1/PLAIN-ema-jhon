import "./Cart.css";
const Cart = (props) => {
  const { cart, clearCart, children } = props;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.01).toFixed(2));
  // const taxString = (total * 0.01).toFixed(2);
  // const tax = parseFloat(taxString);
  const grandTotal = (total + shipping + tax).toFixed(2);
  return (
    <div className="cart-summary">
      <h1>order summary </h1>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping:${shipping}</p>
      <p>Tax:${tax}</p>
      <h5>Grand Total:${grandTotal}</h5>
      <button onClick={clearCart}>clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
