import { useContext, useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import { AppContext } from "../App";

function StoreSection() {
  const context = useContext(AppContext);
  if (!context) {
    // Handle the case when the context is undefined
    return <h1>there is no context</h1>; // Or any fallback UI
  }
  const [store, setStore] = useState([]);
  const [quantity, setquantity] = useState(0);
  const { items } = context;

  useEffect(() => {
    async function getData() {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      const data = await res.json();
      setStore(data);
      console.log(data);
    }
    getData();
  }, [items]);
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-[10rem]">
      {store.map((product) => (
        <ProductCards product={product} key={product.id} />
      ))}
    </div>
  );
}

export default StoreSection;
