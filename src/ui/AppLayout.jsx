// src/ui/AppLayout.jsx
import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppLayout = ({ items }) => {
  const location = useLocation();

  return (
    <body className="overflow-auto pt-[5rem]">
      <NavBar items={items} />
      <main className="mx-auto">
        <AnimatePresence>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </body>
  );
};

export default AppLayout;
