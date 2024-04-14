import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../custom.scss";
import "./index.css";
import ErrorPage from "../error-page.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";
import ProjectSpace from "./routes/ProjectSpace.jsx";
import ReactPlayerTest from "./components/ReactPlayerTest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <Home />
      </Navbar>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <Navbar>
        <ProjectSpace />
      </Navbar>
    ),
  },
  {
    path: "/contact",
    element: (
      <Navbar>
        <Contact />
      </Navbar>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
