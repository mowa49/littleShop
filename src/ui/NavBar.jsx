import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagOutlined,
  TripOrigin,
  Menu,
  Close,
} from "@mui/icons-material";
import { AppContext } from "../App";
import ModalCart from "./ModalCart";

function NavBar() {
  const context = useContext(AppContext);
  if (!context) {
    // Handle the case when the context is undefined
    return <h1>there is no context</h1>; // Or any fallback UI
  }
  const { items, toggleModal, allQuantity } = context;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOn = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="backg bg-[#ffffff] text-black fixed top-0 w-full min-h-[7rem] z-10 justify-center items-center content-center px-[8vw]">
      <nav className="mx-auto justify-between flex items-center">
        <Link
          to="/home"
          className="text-xl font-bold items-center content-center flex"
        >
          <TripOrigin /> <h3>LittleShop</h3>
        </Link>
        <div className="flex flex-row">
          <div className="basket flex items-center gap-5 mr-10">
            <button
              onClick={() => toggleModal()}
              className="relative bg-transparent hover:bg-slate-300"
            >
              <div className="bg-[rgb(144,207,231,0.5)] backdrop-blur-sm rounded-full w-[1.5rem] h-[1.5rem] items-center flex justify-center absolute top-[-20px] right-[-25px] ">
                {allQuantity}
              </div>
              <ShoppingBagOutlined />
              <ModalCart />
            </button>
            <button onClick={toggleMenu} className="md:hidden transition-all">
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>
          <div
            className={`display transition-all duration-500 ease-in-out${
              isMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100vw]"
            }  flex-col flex justify-start h-[100vh] p-5 md:h-[5rem] md:flex-row items-center gap-5 transition-all absolute md:static top-[7rem] left-0 w-full md:w-auto bg-[#ffffff] md:bg-transparent md:p-0 md:opacity-100 md:translate-x-0`}
          >
            <Link
              to="/shopping"
              className="mr-4 flex items-center"
              onClick={() => handleClickOn()}
            >
              <a>Cart</a>
            </Link>
            <Link
              to="/"
              className="mr-4 flex items-center"
              onClick={() => handleClickOn()}
            >
              <a>Home</a>
            </Link>
            <Link
              to="/store"
              className="mr-4 flex items-center"
              onClick={() => handleClickOn()}
            >
              <a>Store</a>
            </Link>
            <Link
              to="/about"
              className="mr-4 flex items-center"
              onClick={() => handleClickOn()}
            >
              <a>About</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
