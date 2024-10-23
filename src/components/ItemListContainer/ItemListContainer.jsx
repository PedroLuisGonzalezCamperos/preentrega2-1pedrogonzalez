import React from "react";
import { getProducts } from "../../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams()//desestructurando objeto va asociado recibe el valor del parámetro dinámico que llamé idCategory

  useEffect(() => {
    getProducts()
      .then((data) => {

if (idCategory) {

const filterProducts =data.filter((product)=>product.category===idCategory)
setProducts(filterProducts)

} else { setProducts(data) }
       


      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        "finalizó la promesa";
      });
  }, [idCategory]);

  console.log(products);

  return (
    <div className="itemlistcontainer">
<ItemList products ={products}/>
    </div>
  );
};

export default ItemListContainer;
