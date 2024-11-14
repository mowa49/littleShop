import { useEffect } from "react";
import { Link } from "react-router-dom";

function ShoppingCartItem({ item, handleRemove }) {
  return (
    <div className=" border-b-2">
      <div
        className="flex  bg-white justify-between content-center items-center rounded-xl p-10 transition-all
 min-w-[60vw] gap-10"
      >
        <div className="flex">
          <img src={item.image} alt={item.title} width={50} />
        </div>
        <p>{item.title}</p>
        <p>{item.price} CHF</p>
        <div>Quantity: {item.quantity}</div>
        <div className="flex  flex-row items-center">
          <Link to={`/store/${item.id}`}>
            <button className="btn-secondary">see item</button>
          </Link>
          <button onClick={() => handleRemove(item)} className="btn-primary">
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
