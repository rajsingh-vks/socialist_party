"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LatestUpdatesSection from "./LatestUpdatesSection";
import UpdatesSliderSection from "./UpdatesSliderSection";
import VideoListSection from "./VideoListSection";

export default function HeroBanner() {
  // Example slides (replace with your own images/text as needed)
  const slides = [
    {
      image: "/banner_1.jpg",
      heading: "Reviving Socialism in ",
      highlight: "India",
      description: "We stand for equality, justice, and the rights of the marginalized. Join us to shape a better future.",
    },
    {
      image: "/banner_1.jpg",
      heading: "Empowering the People of ",
      highlight: "Bharat",
      description: "Together, we can build a nation where every voice is heard and every citizen thrives.",
    },
    {
      image: "/banner_1.jpg",
      heading: "A New Dawn for ",
      highlight: "Social Justice",
      description: "Support our movement for a fair, inclusive, and progressive society.",
    },
  ];
  const [current, setCurrent] = useState(0);

  // Autoslider: advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  // const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">

        {/* Slider Images */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/70" style={{ backgroundColor: "rgba(35, 61, 86, .63)" }} />
          </div>
        ))}

        {/* Slider Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6 text-white w-full">
            {/* Small tag */}
            <span className="rounded-full border border-red-100 px-4 py-2 text-sm text-red-100">
              VOICE OF THE PEOPLE
            </span>
            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              {slides[current].heading}
              <span className="text-red-500">{slides[current].highlight}</span>
            </h1>
            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              {slides[current].description}
            </p>
            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/mission"
                className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black"
              >
                Our Mission
              </Link>
              <Link
                target="_blank"
                href="https://groups.google.com/g/socialist-party-india"
                
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
                style={{ backgroundColor: '#e5484d' }}
              >
                Join Our Mailing List
              </Link>
            </div>
          </div>

          {/* Slider Controls */}
          {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
          aria-label="Next Slide"
        >
          &#8594;
        </button> */}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full border border-white transition-all ${current === idx ? "bg-white" : "bg-transparent"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <LatestUpdatesSection />

      <UpdatesSliderSection />
      <VideoListSection />
    </>
  );
}
