import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import vid1 from "/videos/vid1.mp4";
// import vid2 from "/videos/vid2.mp4";
import "./VideoCarousel.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: vid1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: vid1,
      credit: "Video by cottonbro from Pexels",
    },
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => (
          <Carousel.Item key={videoObj.id} onClick={(e) => e.stopPropagation()}>
            <ReactPlayer
              url={videoObj.src}
              pip={true}
              controls={true}
              playing={true}
            />
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
              <p>{videoObj.credit}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
