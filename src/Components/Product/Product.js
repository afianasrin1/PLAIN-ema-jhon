import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, rating } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>price:${price}</p>
        <p>Seller:{seller}</p>
        <p>
          <small> Rating:{rating}stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
