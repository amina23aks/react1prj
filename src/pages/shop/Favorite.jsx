/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../context/favorite-context";
import { PRODUCTS } from "../../products1"; // Make sure this import is correct and points to your products data
import "./Favorite.css";
import { ShopContext } from "../../context/shop-context";

export const Favorite = () => {
  const { favoriteItems } = useContext(FavoriteContext);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount=(id) => cartItems[id];
  const navigate = useNavigate();
  return (
    <div className="favorite">
      <h1>My Favorite Items</h1>
      <div className="favorite-items">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((favoriteItemId) => {
            const product = PRODUCTS.find((product) => product.id === favoriteItemId);
            return product ? (
              <div key={product.id} className="favorite-item">
                <div className="fav">
                  <img src={product.productImage} alt="" className="imagee" /><br/>
                  <p>{product.productName}</p>
                  <div className="btn">
                    <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                    <button onClick={() => addToCart(product.id)}>add to cart {cartItemCount(product.id) > 0 && <> ({cartItemCount(product.id)})</>}</button>
                  </div>
                </div>
              </div>
            ) : null;
          })
        ) : (
          <p>No favorite items yet.</p>
        )}
      </div>
    </div>
  );
};
