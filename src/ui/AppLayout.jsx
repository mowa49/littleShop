// src/ui/AppLayout.jsx
import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppLayout = ({ items }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <NavBar items={items} />
      <main className="mt-[4rem] justify-center content-center mx-auto">
        <AnimatePresence>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AppLayout;
