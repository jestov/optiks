"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowSmallIcon from "./icons/ArrowSmallIcon";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Javier Aldape",
    role: "CEO & Co-founder, Kredi",
    content:
      '"This service has completely transformed our business. Highly recommend!"',
    image: "/img/testimonials/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    content: '"Exceptional quality and outstanding support!"',
    image: "/img/testimonials/2.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    content:
      '"The team is highly skilled and very responsive. Our project was a huge success!"',
    image: "/img/testimonials/3.jpg",
  },
  {
    name: "Robert Brown",
    role: "CTO of Startup",
    content: '"Innovative solutions and excellent customer service."',
    image: "/img/testimonials/4.jpg",
  },
  {
    name: "Emily White",
    role: "Designer",
    content: '"Creative and professional. Our go-to for design needs."',
    image: "/img/testimonials/4.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="text-white md:py-12 py-10 w-full px-[30px]">
      <div className="container mx-auto px-2 lg:px-12 flex flex-col gap-12 md:gap-20 items-center">
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <h3 className="text-3xl md:text-5xl font-monument uppercase text-center relative before:absolute after:absolute before:bg-[url('/img/title_left.svg')] after:bg-[url('/img/title_right.svg')] before:bg-contain after:bg-contain before:bg-no-repeat after:bg-no-repeat before:w-[120%] before:h-[120%] before:left-[-5%] before:top-[-12.5%] after:w-[120%] after:h-[120%] after:left-[102.75%] after:top-[-12.5%]">
            Our <span className="text-greenLighter">Clients</span>
          </h3>
          <h4 className="text-white text-2xl md:text-4xl w-full text-center">
            Our clients have a combined funding of
            <span className="text-greenLighter"> ~US400 MM</span>
          </h4>
        </div>
        <div className="relative flex flex-col gap-12 md:gap-20 justify-center items-center overflow-hidden max-w-6xl w-full px-[15px]">
          <button
            className={`absolute left-0 z-10 transform md:-translate-y-[60px] text-2xl text-white p-4 md:p-6 transition duration-300 rounded-full focus:outline-none ${
              current === 0
                ? "opacity-50 bg-secondaryBlue cursor-not-allowed"
                : "bg-secondaryBlue hover:bg-primary"
            }`}
            onClick={prevSlide}
            disabled={current === 0}
          >
            <ArrowSmallIcon className="rotate-180" />
          </button>
          <button
            className={`absolute right-0 z-10 transform md:-translate-y-[60px] text-2xl text-white p-4 md:p-6 transition duration-300 rounded-full focus:outline-none ${
              current === length - 1
                ? "opacity-50 bg-secondaryBlue cursor-not-allowed"
                : "bg-secondaryBlue hover:bg-primary"
            }`}
            onClick={nextSlide}
            disabled={current === length - 1}
          >
            <ArrowSmallIcon />
          </button>
          <div
            className="flex transition-transform duration-1000 ease-in-out w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full">
                <div className="border border-white border-opacity-10 rounded-[32px] mx-4 md:mx-auto p-8 md:p-16  max-w-3xl flex flex-col gap-8 min-h-[200px]">
                  <div className="flex items-center">
                    <Image
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white"
                      width={180}
                      height={180}
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-6 flex flex-col gap-3">
                      <h3 className="text-xl md:text-2xl !leading-none text-greenLighter">
                        {testimonial.name}
                      </h3>
                      <p className="text-base !leading-none">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl md:text-3xl !leading-snug">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full flex justify-center py-4 gap-3 md:gap-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer w-10 md:w-14 h-1 md:h-1.5 rounded-full transition duration-500 ${
                  index === current
                    ? "bg-greenLighter"
                    : "bg-white bg-opacity-20 hover:bg-opacity-50"
                }`}
                onClick={() => setCurrent(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
