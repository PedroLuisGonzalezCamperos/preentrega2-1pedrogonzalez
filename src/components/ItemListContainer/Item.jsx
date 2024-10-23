import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <Link to={"/detail/"+product.id} className="item">
      <h2>{product.name}</h2>
      <img src={product.image} alt="" width={250} />
      <p>precio:${product.price}</p>
      </Link>

     
  );
};

export default Item;
