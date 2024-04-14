import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoCarousel.css";

const VideoCarousel = ({ videos }) => {
  const [playingIndex, setPlayingIndex] = useState(0);

  const handleSlide = (selectedIndex) => {
    setPlayingIndex(selectedIndex);
  };

  return (
    <Carousel className="relative" onSelect={handleSlide} interval={null}>
      {videos.map((videoSrc, index) => (
        <Carousel.Item key={index}>
          <ReactPlayer
            url={videoSrc}
            width="100%"
            controls={true}
            playing={index === playingIndex}
            volume={0}
            playsinline={true}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;