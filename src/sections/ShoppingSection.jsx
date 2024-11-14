import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ShoppingCartItem from "../components/ShoppingCartItem";

function ShoppingSection() {
  const { items, handleRemove } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = items?.reduce(
      (total, item) => (total = item.price * item.quantity),
      0
    );
    setTotalPrice(totalPrice);
    console.log(totalPrice);
  }, [items]);

  return (
    <div className="flex flex-col justify-center top-5 min-w-[80vw] bg-white min-h-[100vh] content-center items-center gap-10 ">
      <div className="border-b-2">
        {items.map((item) => (
          <ShoppingCartItem
            item={item}
            key={item.title}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="bg-blue-200 p-2 w-[10vw] m-20">
        total cost :{totalPrice}
      </div>
    </div>
  );
}

export default ShoppingSection;
