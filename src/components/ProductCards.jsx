import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function ProductCards({ product }) {
  const { title } = product;
  const { handleAddToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1); // Correctly using useState

  function getValue(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <div
      className="flex flex-col bg-white  content-center items-center rounded-sm w-[22rem] shadow-xl p-5 hover:scale-105 transition-all
     min-h-[25rem] justify-between mx-auto "
    >
      <h6 className="mb-2">{title}</h6>
      <div>
        <img src={product.image} alt={product.title} className="w-[6rem]" />
      </div>
      <div className="flex flex-col items-center justify-center content-center w-full">
        <div className=" text-black px-1 m-2 border rounded-sm shadow-md items-center text-center  h-[2rem]">
          <p>{product.price} CHF</p>
        </div>
        <div className="gap-2 flex flex-col items-center justify-between content-center w-full">
          <div className="flex justify-between w-full gap-2">
            <button
              className="btn-primary px-4 py-2 "
              onClick={() => handleAddToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <select
              className="rounded-sm border-2 p-2"
              onChange={getValue}
              value={quantity}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Link to={`/store/${product.id}`}>
              <button className="btn-secondary w-full text-black px-4 py-2 ">
                see product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
