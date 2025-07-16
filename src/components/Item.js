import React, { useState } from "react"; 

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true); 
  };

  const itemClassName = isInCart ? "in-cart" : "";

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
