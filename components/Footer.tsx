"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoWhite from "./LogoWhite";
import { usePathname } from "next/navigation";
import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import ContactFooter from "./ContactFooter";
import ColIcon from "./icons/ColIcon";
import MxIcon from "./icons/MxIcon";

const socialOptions = [
  {
    name: "Instagram",
    icon: <InstagramIcon color="#ffffff" className="h-10" />,
    link: "#",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon color="#ffffff" className="h-10" />,
    link: "#",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon color="#ffffff" className="h-10.5" />,
    link: "https://www.linkedin.com/company/optiks-strategies/",
  },
];

const menuItems = [
  {
    links: [
      { name: "Why Optiks", href: "#why-optiks" },
      { name: "Services", href: "#services" },
      { name: "Our clients", href: "#clients" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (route: string) => {
    return route === activeSection;
  };

  return (
    <footer className="flex flex-col py-12 md:py-24 px-[30px] xl:px-24 gap-12 lg:gap-32 text-white bg-primary min-h-[35vh] relative z-1 rounded-[32px] w-full max-w-[1800px] mx-auto">
      <div className="flex flex-col gap-12 lg:gap-20 lg:flex-row lg:justify-between items-start">
        <div className="flex flex-col gap-12 justify-center lg:justify-start min-w-[250px] w-full">
          <LogoWhite />
          <div className="flex flex-col gap-3">
            <span className="text-greenLighter">Contact Us</span>
            <Link
              className="text-xl"
              href="mailto:optiks@optiks.com.co"
              target="_blank"
            >
              optiks@optiks.com.co
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-greenLighter">Offices</span>
            <div className="flex flex-col gap-8">
              <div className="text-lg flex gap-5 !leading-snug">
                <ColIcon />
                Edificio Capital Park 93, Calle 93 #11A - 28 Bogota, Colombia{" "}
              </div>
              <div className="text-lg flex gap-5 !leading-snug">
                <MxIcon />
                IOS OFFICES Arboleda, Av. del Roble 660, Valle del Campestre,
                66265 San Pedro Garza García, Monterrey, NL, Mexico
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </div>
      <div className="flex flex-col gap-8 md:gap-0 items-center md:flex-row justify-center md:justify-between w-full">
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className="flex gap-6 lg:gap-10 2xl:gap-2 items-center w-full justify-between"
          >
            <ul className="flex flex-col md:flex-row gap-2 md:gap-4 tracking-widest text-[12px] uppercase font-monument w-full items-center">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className={`inline-flex text-white hover:text-secondaryBlue !leading-loose font-monument uppercase tracking-wider text-[11px] px-5 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${
                      isActive(link.href)
                        ? "!text-secondaryBlue bg-greenLighter hover:bg-greenLighter"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-6 items-center md:items-end">
          <ul className="flex items-center gap-8 md:ml-auto">
            {socialOptions.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.link}
                  target="_blank"
                  className="text-inherit hover:opacity-85 transition duration-500"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <p className="text-xs uppercase tracking-wide">
              © {new Date().getFullYear()} Optiks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
