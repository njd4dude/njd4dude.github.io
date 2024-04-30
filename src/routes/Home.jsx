import Intro from "./Intro/Intro";
import { useEffect, useState } from "react";
import VideoCarousel from "../components/VideoCarousel";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import app from "../firebaseConfig";
import { getVideos } from "../fetchVideos";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const allVideos = await getVideos();
      setVideos(allVideos);
    };
    fetchVideos();
  }, []);

  return (
    <div className="mt-24 mb-24 ">
      <div className="flex  justify-center">
        <Intro />
      </div>
        <h2 className="text-6xl md:text-7xl font-terminalFont font-bold mb-12 mt-20  tracking-widest text-center underline text-underline underline-offset-8">
          PROJECTS
        </h2>
      <div className="flex items-center justify-center  ">
        <VideoCarousel videos={videos} />
      </div>
    </div>
  );
};

export default Home;
