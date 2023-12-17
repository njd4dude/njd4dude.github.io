import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../error-page.jsx";
import Home from "./routes/Home/Home.jsx";
import ProjectSpace from "./routes/ProjectSpace.jsx";
import Contact from "./routes/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <App />
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
