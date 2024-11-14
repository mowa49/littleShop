import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { AppContext } from "../App";
import ModalCart from "./ModalCart";

function NavBar() {
  const context = useContext(AppContext);
  if (!context) {
    // Handle the case when the context is undefined
    return <h1>there is no context</h1>; // Or any fallback UI
  }
  const { items, toggleModal } = context;
  const num = items?.reduce(
    (acc, item) => (item.quantity > 1 ? acc + item.quantity : acc + 1),
    0
  );

  return (
    <header className="backg bg-gray-200 text-black p-4 fixed w-full min-h-[4rem] z-10">
      <nav className="mx-auto justify-between flex items-center">
        <Link to="/" className="text-xl font-bold">
          Littleshop
        </Link>
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={() => toggleModal()}
            className="relative bg-transparent hover:bg-slate-300"
          >
            <div className="bg-[rgb(144,207,231,0.5)] backdrop-blur-sm rounded-full w-[1.5rem] h-[1.5rem] items-center flex justify-center absolute top-[-15px] right-[-15px]">
              {num}
            </div>
            <ShoppingBagOutlined />
          </button>
          <ModalCart />
          <Link to="/shopping" className="mr-4 flex items-center">
            Cart
          </Link>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/store" className="mr-4">
            Store
          </Link>
          <Link to="/about" className="mr-4">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

// import { CancelScheduleSendOutlined } from "@mui/icons-material";
// import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
// import { useContext, useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import { AppContext } from "../App";
// import ModalCart from "./ModalCart";

// function NavBar() {
//   const { items, toggleModal } = useContext(AppContext);
//   const num = items.length;
//   return (
//     <header className="backg bg-gray-200 text-black p-4 fixed w-full min-h-[4rem] z-10">
//       <nav className=" mx-auto  flex  content-center flex justify-center ">
//         <Link to="/" className="text-xl font-bold">
//           Littleshop
//         </Link>
//         <div className="hidden md:flex">
//           <div className="bg-blue-300 rounded-full w-[2rem] h-[2rem] items-center content-center flex justify-center">
//             {num}
//           </div>
//           <button onClick={() => toggleModal()} className="">
//             <ShoppingBagOutlined />
//           </button>
//           <ModalCart />
//           <Link
//             to="/shopping"
//             className="mr-4 align-middle items-center justify-center flex"
//           >
//             Cart
//           </Link>
//           <Link to="/" className="mr-4">
//             Home
//           </Link>

//           <Link to="/store" className="mr-4">
//             Store
//           </Link>
//           <Link to="/about" className="mr-4">
//             About
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;
