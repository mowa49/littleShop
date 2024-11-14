import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetail() {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  console.log(itemId);
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

  return (
    <div className="bg-white h-[100vh] w-[100vw] flex flex-col justify-center content-center items-center gap-10">
      <h3>{product.title}</h3>
      <div className="flex w-[15rem]">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="bg-sky-700  shadow-xl p-3 rounded-lg text-white font-bold backdrop-blur-md">
        <p className="bold">{product.price} CHF</p>
      </div>
      <div className="max-w-[50%]">
        <p>{product.description}</p>
      </div>
      <div>
        <Link to="/shopping">
          <button className="btn-primary">Buy</button>
        </Link>
        <Link to="/store">
          <button className="btn-secondary">back to store</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
