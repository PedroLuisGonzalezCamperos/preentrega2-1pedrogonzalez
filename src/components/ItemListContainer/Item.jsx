import React from "react";

const Item = ({product}) => {
  return (
    <div key={product.id} className="item">
      <h2>{product.name}</h2>
      <img src={product.image} alt="" width={250} />
      <p>precio:${product.price}</p>
    </div>
  );
};

export default Item;
