"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { id: 1, name: "Laika", image: "/img/clients/laika.svg" },
  { id: 2, name: "TUL", image: "/img/clients/tul.svg" },
  { id: 3, name: "R5 Colombia", image: "/img/clients/r5.svg" },
  { id: 4, name: "Yuno", image: "/img/clients/yuno.svg" },
  { id: 5, name: "Bia Energy", image: "/img/clients/bia.svg" },
  {
    id: 6,
    name: "Kredi",
    image: "/img/clients/kredi.svg",
  },
  { id: 7, name: "Solvento", image: "/img/clients/solvento.svg" },
  { id: 8, name: "Mekan", image: "/img/clients/mkn.svg" },
  { id: 9, name: "Awake Travel", image: "/img/clients/awake.svg" },
  {
    id: 10,
    name: "Bacu",
    image: "/img/clients/bacu.png",
  },
  { id: 11, name: "Morado", image: "/img/clients/morado.svg" },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check window size on initial render
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return isMobile;
};

const BrandStrip = () => {
  const isMobile = useIsMobile();

  return (
    <Marquee
      gradient={false}
      speed={isMobile ? 40 : 50}
      className="py-20 md:py-12"
    >
      {" "}
      {/* Set speed based on device */}
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="item"
          style={{ marginRight: isMobile ? "50px" : "120px" }}
        >
          <div
            style={{
              height: "62px",
              width: "138px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              src={brand.image}
              alt={brand.name}
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default BrandStrip;
