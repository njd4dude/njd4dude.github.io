import React from "react";
import "./App.css"; // Import your custom styles
import ProjectSpace from "./ProjectSpace";
import AboutMe from "./AboutMe";
import Intro from "./Intro";

function App() {
  return (
    <div className="bg-slate-800">
      <AboutMe />
      <Intro />
      <ProjectSpace />
    </div>
  );
}

export default App;
