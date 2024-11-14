import React, { createContext, useEffect, useState } from "react";
import AppLayout from "./ui/AppLayout";

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setquantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  AppContext = React.createContext();
  // useEffect(() => {
  //   function OpenModal() {
  //     setIsModalOpen(true);
  //   }
  // });

  const toggleModal = () => {
    console.log(isModalOpen);
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  };
  const closeModal = () => setIsModalOpen(false);
  function handleAddToCart(item) {
    const isThere = items.find((a) => a.id === item.id);
    !isThere
      ? setItems([...items, { ...item, quantity: 1 }])
      : items.map((i) => (i.id === item.id ? setquantity(i.quantity++) : i));
  }
  function handleRemove(item) {
    item.quantity === 1
      ? setItems(items.filter((a) => a.id !== item.id))
      : setquantity(item.quantity--);
  }
  //////////without counting version
  // function handleAddToCart(item) {
  //   setItems([...items, item]);
  // }

  return (
    <AppContext.Provider
      value={{
        items,
        handleAddToCart,
        handleRemove,
        toggleModal,
        closeModal,
        isModalOpen,
      }}
    >
      <AppLayout />
    </AppContext.Provider>
  );
}
export const AppContext = React.createContext();
export default App;
