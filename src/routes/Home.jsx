import Intro from "./Intro/Intro";
import { useEffect, useState } from "react";
import VideoCarousel from "../components/VideoCarousel";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import app from "../firebaseConfig";
import { getVideos } from "../fetchVideos";
import Boxes from "../components/Boxes";
import Footer from "../components/Footer";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const allVideos = await getVideos();
      setVideos(allVideos);
    };
    fetchVideos();
  }, []);

  const programmingLanguages = ["Python", "Javascript", "Java", "C", "SQL"];
  const webTechnologies = ["React", "HTML", "CSS", "TailwindCSS"];
  const fullstackDevelopment = [
    "Postman",
    "API Development and Integration",
    "Website Hosting and Deployment",
    "Git/Github",
    "CLI",
    "Chrome Extensions",
  ];
  const machineLearning = ["PyTorch", "TensorFlow", "Computer Vision"];

  return (
    <div className="mt-24">
      <div className="flex justify-center">
        <Intro />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-4 sm:mx-20 lg:mx-40 my-20">
        <Boxes
          category={"Programming Languages"}
          items={programmingLanguages}
        />
        <Boxes category={"Web Technologies"} items={webTechnologies} />
        <Boxes
          category={"Fullstack Development"}
          items={fullstackDevelopment}
        />
        <Boxes category={"Machine Learning"} items={machineLearning} />
      </div>
    </div>
  );
};

export default Home;
