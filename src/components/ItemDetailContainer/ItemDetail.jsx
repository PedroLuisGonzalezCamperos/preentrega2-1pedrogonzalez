
const ItemDetail = ({product}) => {
  return (
    <div className="itemdetail">
      <img src={product.image} className="itemdetail-img" alt="" />
      <div className="itemdetail-texto">
        <h2>{product.name}</h2><br />
        <p>{product.description}</p><br />
        <p>Precio:${product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
