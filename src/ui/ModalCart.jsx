import { CloseFullscreen, DeleteForever } from "@mui/icons-material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { useContext } from "react";
import { AppContext } from "../App";
function ModalCart({}) {
  const { items, isModalOpen, closeModal, handleRemove } =
    useContext(AppContext);

  if (!isModalOpen || items?.length === 0) return null;
  return (
    <div className=" text-sm z-10 bg-white border-gray-950 shadow-2xl min-w-[15rem] min-h-[10rem] fixed top-[3.8rem] right-[10vw] backdrop-blur-md rounded-xl p-2 flex flex-col">
      <button
        className="self-end bg-transparent bg-none p-0 border-none"
        onClick={() => closeModal()}
      >
        <CloseRounded className="bg-transparent" />
      </button>
      <div className=" flex justify-between w-full border-b-4 px-2">
        <p>Items</p>
        <p>Quantity </p>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between content-center items-center w-full px-4 border-b-2"
        >
          <p>{item.title.split(" ").slice(0, 3).join(" ")}</p>
          <p> {item.quantity}</p>
          <button
            className="border-none w-2"
            onClick={() => (handleRemove(item), console.log("click"))}
          >
            <DeleteForever />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ModalCart;
