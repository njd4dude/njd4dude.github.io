import Intro from "./routes/Intro/Intro";
//2/25 left off here: created a project slides to showcase projects
import VideoCarousel from "./components/VideoCarousel";
// import "bootstrap/dist/css/bootstrap.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const projects = [
  { videoUrl: "/videos/vid1.mp4", title: "Project 1" },
  { videoUrl: "/videos/vid2.mp4", title: "Project 2" },
];

const Home = () => {
  return (
    <div className="md:mx-20 mt-24 mb-24">
      <Intro />
      <hr className="my-20 mx-24 border-t-2 border-black" />
      <h2 className="text-7xl font-round font-bold mb-10">PROJECTS</h2>
      <div className="slides flex items-center justify-center ">
        <VideoCarousel />
      </div>
    </div>
  );
};

export default Home;
