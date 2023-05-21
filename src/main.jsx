import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./component/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./component/Store";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
