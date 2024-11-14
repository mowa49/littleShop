import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import HomeSection from "./sections/HomeSection";

import PageTransition from "./components/PageTransition";

import ErrorPage from "./page/ErrorPage";
import StoreSection from "./sections/StoreSection";
import ShoppingSection from "./sections/shoppingSection";
import AboutSection from "./sections/AboutSection";
import ItemDetail from "./components/ItemDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeSection /> },
      {
        path: "/home",
        element: (
          <PageTransition>
            <HomeSection />
          </PageTransition>
        ),
      },
      {
        path: "/store",
        element: (
          <PageTransition>
            <StoreSection />
          </PageTransition>
        ),
      },
      {
        path: "/shopping",
        element: (
          <PageTransition>
            <ShoppingSection />
          </PageTransition>
        ),
      },
      {
        path: "/about",
        element: (
          <PageTransition>
            <AboutSection />
          </PageTransition>
        ),
      },
      {
        path: "/Store/:itemId",
        element: <ItemDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
