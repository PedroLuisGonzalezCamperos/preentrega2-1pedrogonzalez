import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import "./itemdetailcontainer.css"
//con este componente se va a filtrar

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
    .then((data) => {
      const findProduct = data.find((product) => product.id === idProduct);
      setProduct(findProduct);
    });
  }, [idProduct]);

  return (
<div className="itemdetailcontainer">
<ItemDetail product={product} />
</div>
  )
  
  
}

export default ItemDetailContainer
