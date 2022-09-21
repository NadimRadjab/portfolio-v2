import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface Props {
  sliderData: { image: StaticImageData }[];
  xlWidth: string;
  width: string;
}
const Slider = (props: Props) => {
  const [current, setCurrent] = useState(0);
  const length = props.sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(props.sliderData) || props.sliderData.length <= 0) {
    return null;
  }

  return (
    <div
      className={`relative 2xl:w-[${props.xlWidth}] w-[${props.width}] flex justify-center items-center bg-zinc-800  shadow-lg shadow-neutral-700  h-auto rounded-xl  p-3 `}
    >
      <FaArrowAltCircleLeft
        onClick={prevSlide}
        size={30}
        className="absolute top-[50%] left-[5px] z-10 text-black/90 cursor-pointer"
      />
      {props.sliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-100 transition duration-500 ease-in-out"
                : "opacity-0 transition duration-500 ease-in-out scale-110"
            }
            key={index}
          >
            {index === current && (
              <Image
                priority={true}
                loading="eager"
                src={slide.image}
                alt="Slide Images"
                className="rounded-lg"
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight
        onClick={nextSlide}
        size={30}
        className="absolute top-[50%] right-[5px]  z-10 text-black/90  cursor-pointer"
      />
    </div>
  );
};

export default Slider;
