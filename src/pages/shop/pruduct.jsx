// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FavoriteContext } from "../../context/favorite-context";
import { useNavigate } from "react-router-dom";
export const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, productName, price, productImage,subtitel } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  // eslint-disable-next-line no-unused-vars
  const {  addFavoriteItem  } = useContext(FavoriteContext);

  const cartItemCount = cartItems[id];
  const navigate = useNavigate();
  return (
    <div className="product" style={{height : '100%'}} >
      <img src={productImage} alt={productName}  style={{ marginLeft: '25%' }}/>
      <div className="description" onClick={()=>navigate(`/product/${id}`)}>
        <p style={{ color: 'black', fontWeight: '700' }}>
          <b>{productName}</b>
        </p>{subtitel}
        <p style={{ color: 'black' }}> ${price}</p>
      </div>
      <div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <button className="addToCartBttn" onClick={() => addFavoriteItem(id)}>
          Add To Favorite
        </button>
      </div>
    </div>
  );
};