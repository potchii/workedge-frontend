import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./component/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./component/Store";
import Checkout from "./component/checkout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
