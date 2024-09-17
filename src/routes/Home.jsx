import Intro from "./Intro/Intro";
import { useEffect, useState } from "react";
import VideoCarousel from "../components/VideoCarousel";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import app from "../firebaseConfig";
import { getVideos } from "../fetchVideos";
import Boxes from "../components/Boxes";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const allVideos = await getVideos();
      setVideos(allVideos);
    };
    fetchVideos();
  }, []);

  const programmingLanuguages = ["Python", "Javascript", "Java", "C", "SQL"];
  const webTechnologies = ["React", "HTML", "CSS", "TailwindCSS"];
  const fullstackDevelopment = [
    "Postman",
    "API Development and Integration",
    "Website Hosting and Deployment",
    "Git/Github",
    "CLI",
    "Chrome Extensions",
  ];

  return (
    <div className="mt-24 mb-24 ">
      <div className="flex  justify-center ">
        <Intro />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16  mx-40 my-20">
        <Boxes
          category={"Programming Lanuguages"}
          items={programmingLanuguages}
        />
        <Boxes category={"Web Techonolgies"} items={webTechnologies} />
        <Boxes
          category={"Fullstack Development"}
          items={fullstackDevelopment}
        />
      </div>
    </div>
  );
};

export default Home;
