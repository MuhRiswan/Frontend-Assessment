"use client";

import { Button } from "@/components/ui/button";
import { Play, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/img/slider-4.jpg",
      alt: "Slide 1",
      name: "Wasroni",
      job: "Petani",
      text: "Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian.",
    },
    {
      url: "/img/slider-5.jpg",
      alt: "Slide 2",
      name: "Aldi",
      job: "Petani",
      text: "Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.",
    },
    {
      url: "/img/slider-6.jpg",
      alt: "Slide 3",
      name: "Wahyu",
      job: "Petani",
      text: "Dengan adanya Eratani, petani dapat memanfaatkan teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 7000);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);
  return (
    <section className=" w-full h-full my-14 px-2 container  mx-auto">
      <h4 className="text-center font-semibold text-4xl text-green-500">
        Kata Mereka
      </h4>

      <div className="my-10 relative overflow-hidden ">
        {/* Carousel Wrapper */}
        <div className="relative h-[550px] mb-5 md:mb-0 md:h-80 ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="max-w-4xl pb-10 md:pb-0 mx-auto">
                <div className="flex flex-col md:flex-row gap-10bg-[#F3F3F3]  overflow-hidden items-center justify-start">
                  <div className="relative w-full h-80 md:w-64 md:h-64 flex-shrink-0">
                    <Image
                      className="md:absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                      priority
                      src={slide.url}
                      alt="Placeholder"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-2 px-4 w-full md:w-auto">
                    <p className="text-xl font-semibold text-center md:text-left ">
                      {slide.name} |{" "}
                      <span className="font-normal text-gray-500">
                        {slide.job}
                      </span>
                    </p>
                    <p className="text-gray-500 text-center md:text-left line-clamp-4">
                      {slide.text}
                    </p>
                    <Button className="md:ms-auto w-full md:w-40 px-4 py-2 bg-yellow-500 text-gray-950 font-semibold tracking-wide rounded-lg hover:bg-yellow-600 transition">
                      <Play className="w-4 h-4 text-black fill-current" />
                      Putar Video
                    </Button>
                  </div>
                </div>
              </div>

              {/* <Image
                src={slide.url}
                alt={slide.alt}
                loading="lazy"
                width={1000}
                height={500}
                className="object-cover w-full h-full filter backdrop-blur-md brightness-50"
              />
              {index === currentIndex && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl">
                  <h2 className="mb-2 text-xl lg:text-3xl text-center">
                    {slide.textHead}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-none text-sm md:text-2xl text-center font-normal">
                    {slide.text}
                  </p>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex absolute top-[34rem] md:top-72  md:bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-10 h-1.5 rounded-lg  ${
                idx === currentIndex ? "bg-amber-500" : "bg-gray-300"
              } focus:outline-none hover:bg-gray-400 transition`}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        {/* <button
          onClick={prevSlide}
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button> */}
        <button
          onClick={nextSlide}
          className="flex absolute top-28 md:top-0 lg:top-1/2 right-10 md:right-28 z-40 items-center justify-center w-10 h-10 bg-amber-400 rounded-full hover:bg-amber-300 transition"
        >
          <svg
            className="w-5 h-5 text-gray-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Review;
