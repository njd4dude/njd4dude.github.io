import React from "react";
import Home from "./routes/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <Home />
      <hr className="my-20 mx-24 border-t-2 border-black" />
      <div className="projects">
        <h2 className="text-7xl font-round font-bold">PROJECTS</h2>
      </div>
    </div>
  );
};

export default App;
