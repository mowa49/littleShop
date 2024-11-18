import { CloseFullscreen, DeleteForever } from "@mui/icons-material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { useContext } from "react";
import { AppContext } from "../App";
function ModalCart({}) {
  const { items, isModalOpen, closeModal, handleRemove } =
    useContext(AppContext);

  if (!isModalOpen || items?.length === 0) return null;
  return (
    <div className="text-sm z-10 bg-white border-gray-950 shadow-2xl md:min-w-[18rem] min-h-[10rem] min-w-full right-[0] fixed top-[7rem] md:right-[26rem] backdrop-blur-md rounded-xl p-2 flex flex-col">
      <button
        className="self-end bg-transparent bg-none p-0 border-none"
        onClick={() => closeModal()}
      >
        <CloseRounded className="bg-transparent" />
      </button>
      <div className=" flex justify-between w-full border-b-4 px-2">
        <p>Items</p>
        <p className="pr-3">Quantity </p>
      </div>
      <div className="w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-start content-center items-center w-full px-2 border-b-2"
          >
            <div className="w-full flex gap-4">
              <p>{item.title.split(" ").slice(0, 3).join(" ")}</p>
              <p> {item.quantity}</p>
            </div>
            <button
              className="border-2 border-gray-200 p-1 h-8 w-8 flex items-center justify-center hover:bg-red-50 transition-colors"
              onClick={() => (handleRemove(item), console.log("click"))}
            >
              <DeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalCart;
