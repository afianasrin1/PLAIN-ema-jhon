import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  //car er state declare
  const [cart, setCart] = useState([]);

  // ei ta r dorkar nai karon loader use kore hook use korlam
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  //local storage
  useEffect(() => {
    const storedCart = getStoredCart;
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (selectProduct) => {
    console.log(selectProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectProduct.id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectProduct.id);
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
