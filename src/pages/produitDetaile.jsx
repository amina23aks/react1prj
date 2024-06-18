// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './produitDetaile.css';
import { ShopContext } from '../context/shop-context';

// eslint-disable-next-line react/prop-types
function ProduitDetaile({ products }) {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.productImage} alt={product.productName} className="product-image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.subtitel}<br/>{product.Description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
}

export default ProduitDetaile;
