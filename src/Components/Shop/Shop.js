import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
/* 
count, : loaded
perPage (size): 10
pages: count /perPage
currentPage (page)
*/
const Shop = () => {
  // const { products, count } = useLoaderData();
  // console.log(products);
  //car er state declare

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    // console.log(page, size);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // ei ta r dorkar nai karon loader use kore hook use korlam
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  //local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);

    console.log(ids);
    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("by ids", data);
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          // console.log(addedProduct);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);
  const handleAddToCart = (selectProduct) => {
    // console.log(selectProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h1>This is for Products:{products.length}</h1> */}
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* cart component create korar age eta kora hoislo 
        <h1>order summary </h1> 
          <p>Selected Items:{cart.length}</p>*/}
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="orders">
            <button>Review order</button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <h3>
          Currently selected page:{page} and size:{size}
        </h3>
        {/* pagination er start */}
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={page === number && "selected"}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        {/* ekta pages e thakbe koyta page  */}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
