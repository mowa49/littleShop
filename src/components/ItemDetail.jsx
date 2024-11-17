import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
function ItemDetail() {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const { handleAddToCart, num, setNum } = useContext(AppContext);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        if (!res.ok) {
          throw new Error("fetching was not complete");
        }
        const data = await res.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  function getValue(e) {
    setNum(Number(e.target.value));
  }

  return (
    <div className="bg-slate-200 h-[100vh] p-2">
      <div className="flex flex-col justify-center content-center items-center gap-10 bg-white md:mx-[10rem] mt-8 p-[0.5rem] border-4">
        <h3>{product.title}</h3>
        <div className="flex md:max-w-[16rem] max-h-[20rem] border-2 p-2">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="bg-sky-700  shadow-xl p-3 rounded-lg text-white font-bold backdrop-blur-md">
          <p className="bold">{product.price} CHF</p>
        </div>
        <div className="md:max-w-[50%] md:text-center">
          <p>{product.description}</p>
        </div>
        <div>
          selec the quantity:
          <select
            className="rounded-sm border-2 p-1 mx-2"
            onChange={getValue}
            value={num}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="flex md:flex-row md:min-w-[50%] flex-col justify-center content-center">
          <button
            className="btn-primary"
            onClick={() => handleAddToCart(product, num)}
          >
            Buy
          </button>
          <Link to="/store">
            <button className="btn-secondary">back to store</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
