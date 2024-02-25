import React from "react";
import Intro from "./routes/Intro/Intro";
import "./Home.css";

const Home = () => {
  return (
    <div className="md:mx-20 mt-24 ">
      <Intro />
      <hr className="my-20 mx-24 border-t-2 border-black" />
      <div className="projects">
        <h2 className="text-7xl font-round font-bold">PROJECTS</h2>
      </div>
    </div>
  );
};

export default Home;
