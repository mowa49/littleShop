import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function ProductCards({ product }) {
  const { title } = product;
  const { handleAddToCart } = useContext(AppContext);

  return (
    <div
      className="flex flex-col bg-white justify-between content-center items-center rounded-sm shadow-xl p-3 hover:scale-105 transition-all
     min-h-[20rem]"
    >
      <p>{title}</p>
      <div className="flex">
        <img src={product.image} alt={product.title} width={50} />
      </div>
      <p>{product.price} CHF</p>
      <div className="flex  flex-row items-center">
        <Link to={`/store/${product.id}`}>
          <button className="btn-secondary">see product</button>
        </Link>
        <button
          className="btn-primary"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCards;
