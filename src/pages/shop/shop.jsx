// eslint-disable-next-line no-unused-vars
import React from "react";
import { PRODUCTS } from "../../products1";
import { Product } from "./pruduct";
import "./shop.css";


export const Shop = () => {
  
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Time LUX</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};