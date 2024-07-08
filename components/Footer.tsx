"use client";

import Link from "next/link";
import LogoWhite from "./LogoWhite";
import { usePathname } from "next/navigation";
import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import ContactFooter from "./ContactFooter";

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
    link: "#",
  },
];

const menuItems = [
  {
    links: [
      { name: "Why Optiks", href: "/" },
      { name: "Services", href: "#contact" },
      { name: "Our clients", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const { pathname } = usePathname();

  const isActive = (route) => {
    return pathname === route;
  };

  return (
    <footer className="flex flex-col py-12 md:py-24 px-[30px] xl:px-24 justify- gap-12 lg:gap-32 text-white bg-primary min-h-[35vh] relative z-1 rounded-[32px] w-full">
      <div className="flex flex-col gap-12 lg:gap-20 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-12 justify-center lg:justify-start min-w-[150px] w-full">
          <LogoWhite />
          <div className="flex flex-col gap-0.5">
            <span className="text-greenLighter">Contact Us</span>
            <Link
              className="text-xl"
              href="mailto:donoso@optiks.com.co"
              target="_blank"
            >
              donoso@optiks.com.co
            </Link>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-greenLighter">Based In</span>
            <span className="text-xl">Bogotá, Colombia</span>
          </div>
        </div>
        <ContactFooter />
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center md:justify-between w-full gap-12">
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className="flex gap-8 md:gap-6 lg:gap-12 items-center w-full justify-between"
          >
            <ul className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-10 tracking-widest text-[12px] uppercase font-monument w-full items-center">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className={`hover:opacity-85 py-2.5 ${isActive(link.href) ? "text-primary border-b-[3px] border-primary" : ""}`}
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
                  className="text-inherit"
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
