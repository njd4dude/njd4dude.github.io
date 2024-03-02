import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../error-page.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import "./index.css";
import Contact from "./routes/Contact.jsx";
import ProjectSpace from "./routes/ProjectSpace.jsx";

// to save and deploy the code to github: npm run deploy

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
