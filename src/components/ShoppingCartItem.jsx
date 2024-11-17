import { Link } from "react-router-dom";

function ShoppingCartItem({ item, handleRemove }) {
  return (
    <div className="border-b-2">
      <div className="flex flex-col sm:flex-row bg-white justify-between content-center items-center rounded-xl p-6 sm:p-10 transition-all min-w-[60vw] sm:min-w-full">
        {/* Product Image */}
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 mr-4">
          <img
            src={item.image}
            alt={item.title}
            width={100}
            className="rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:flex-1 sm:gap-2">
          <p className="font-semibold text-lg">{item.title}</p>
          <p className="text-gray-600">{item.price} CHF</p>
          <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 sm:mt-0 sm:ml-6">
          <Link to={`/store/${item.id}`}>
            <button className="btn-secondary w-full sm:w-auto">See Item</button>
          </Link>
          <button
            onClick={() => handleRemove(item)}
            className="btn-primary w-full sm:w-auto"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
