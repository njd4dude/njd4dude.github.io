import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoCarousel.css";

const VideoCarousel = ({ videos }) => {
  const [playingIndex, setPlayingIndex] = useState(-1);

  const handleSlide = (selectedIndex) => {
    setPlayingIndex(selectedIndex);
  };

  return (
    <Carousel
      className="relative flex items-center bg-black shadow-2xl"
      onSelect={handleSlide}
      interval={null}
    >
      {videos.map((videoSrc, index) => (
        <Carousel.Item key={index}>
          <ReactPlayer
            url={videoSrc}
            width="100%"
            height="100%"
            controls={true}
            playing={false}
            playsinline={true}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
