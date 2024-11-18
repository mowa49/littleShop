import React, { createContext, useEffect, useMemo, useState } from "react";
import AppLayout from "./ui/AppLayout";
export const AppContext = createContext({});
function App() {
  const [items, setItems] = useState([]);
  const [num, setNum] = useState(1);
  const [allQuantity, setAllQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lastQuantity = items?.reduce(
      (acc, item) => (item.quantity > 1 ? acc + item.quantity : acc + 1),
      0
    );
    function HandleQuantity() {
      setAllQuantity((a) => (a = lastQuantity));
    }
    HandleQuantity();
  }, [items]);

  function handleNum(e) {
    setNum(1);
  }
  const toggleModal = () => {
    console.log(isModalOpen);
    !isModalOpen ? setIsModalOpen(!isModalOpen) : setIsModalOpen(false);
  };
  const closeModal = () => setIsModalOpen(false);

  function handleAddToCart(item, number = 1) {
    const isThere = items.find((a) => a.id === item.id);
    !isThere
      ? setItems([...items, { ...item, quantity: number }])
      : setItems(
          items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + number } : i
          )
        );
  }
  function handleRemove(item) {
    item.quantity === 1
      ? setItems(items.filter((a) => a.id !== item.id))
      : setItems(
          items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
        );
  }

  //////////without counting version
  // function handleAddToCart(item) {
  //   setItems([...items, item]);
  // }

  const value = useMemo(() => ({
    items,
    num,
    handleAddToCart,
    handleRemove,
    toggleModal,
    closeModal,
    setNum,
    isModalOpen,
    allQuantity,
  }));
  return (
    <AppContext.Provider value={value}>
      <AppLayout />
    </AppContext.Provider>
  );
}

export default App;
