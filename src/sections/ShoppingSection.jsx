import { useContext, useMemo } from "react";
import { AppContext } from "../App";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { Link } from "react-router-dom";

function ShoppingSection() {
  const { items, handleRemove } = useContext(AppContext);

  const totalPrice = useMemo(() => {
    return items?.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
  }, [items]);

  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-[70vw] p-6 flex flex-col">
        {items?.length > 0 ? (
          <>
            <div>
              <div className="border-b-2 mb-4">
                {items.map((item) => (
                  <ShoppingCartItem
                    item={item}
                    key={item.id}
                    handleRemove={handleRemove}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-xl font-semibold">
                Total Cost:{" "}
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/store">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  Go back to store
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl">Your cart is empty</p>
            <Link to="/store">
              <button className="mt-4 bg-none text-black px-2 p-2 rounded-sm hover:bg-blue-200 transition duration-200">
                Go back to store
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingSection;
