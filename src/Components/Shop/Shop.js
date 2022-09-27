import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  //car er state declare
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // console.log(product);
    //cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h1>This is for Products:{products.length}</h1> */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* cart component create korar age eta kora hoislo 
        <h1>order summary </h1> 
          <p>Selected Items:{cart.length}</p>*/}
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
