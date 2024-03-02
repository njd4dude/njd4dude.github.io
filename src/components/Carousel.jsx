import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    console.log(slide);
  }, [slide]);

  return (
    <div className="relative flex justify-center items-center w-[800px] h-[500px]  ">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute -left-12 w-8 h-8 text-white"
      />
      {data.map((item, index) => {
        if (index == slide) {
          return <img src={item.src} className="w-full object-contain rounded-2xl" />;
        }
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className=" absolute -right-12 w-8 h-8 text-white"
      />
      <span className="absolute flex bottom-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full ${
              slide === index ? "bg-white" : "bg-gray-400"
            } mx-2 focus:outline-none`}
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};
