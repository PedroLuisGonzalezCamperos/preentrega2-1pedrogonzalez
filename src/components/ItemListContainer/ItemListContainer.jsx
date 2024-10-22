import React from "react";
import { getProducts } from "../../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        "finalizó la promesa";
      });
  }, []);

  console.log(products);

  return (
    <div className="itemlistcontainer">
<ItemList products ={products}/>
    </div>
  );
};

export default ItemListContainer;
