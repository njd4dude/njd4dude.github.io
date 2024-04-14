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
    <div className="md:mx-20 mt-24 mb-24 ">
      <div className="flex justify-center">
        <Intro />
      </div>
      <hr className="my-20 mx-24 border-t-4 opacity-100  " />
      <h2 className="text-center text-7xl font-round font-bold mb-12">
        PROJECTS
      </h2>
      <div className="flex items-center justify-center ">
        <VideoCarousel videos={videos} />
      </div>
    </div>
  );
};

export default Home;
