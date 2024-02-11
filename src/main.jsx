import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleUser from "./Components/SingleUser/SingleUser.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import getUsers from "./Utilities/fetchUsers.js";
import Header from "./Layouts/Header/Header.jsx";
import Footer from "./Layouts/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:id",
    element: <SingleUser />,
    loader: async () => await getUsers("https://dummyjson.com/users"),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
