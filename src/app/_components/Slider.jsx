"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/img/slider-1.jpg",
      alt: "Slide 1",
      textHead: "#SelaluAdaUntukPetani",
      text: "Eratani adalah perusahaan startup Agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.",
    },
    {
      url: "/img/slider-2.jpg",
      alt: "Slide 2",
      textHead: "#PetaniHidupBersih",
      text: "Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.",
    },
    {
      url: "/img/slider-3.jpg",
      alt: "Slide 3",
      textHead: "#PetaniHidupSehat",
      text: "Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.",
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
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className="pt-[4.5rem] w-full mx-auto">
      <div className="relative overflow-hidden shadow-lg">
        {/* Carousel Wrapper */}
        <div className="relative h-80 md:h-[90vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
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
              )}
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
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
        <button
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
        </button>
        <button
          onClick={nextSlide}
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
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
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
