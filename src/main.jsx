import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./components/Update Page/Update.jsx";
import Add from "./components/AddPage/Add.jsx";
import Layout from "./Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/coffes"),
      },
      {
        path: "updateProduct/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffes/${params.id}`),
      },
      {
        path: "addnew",
        element: <Add></Add>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
