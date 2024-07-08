"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../components/Logo";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import CloseIcon from "../components/icons/CloseIcon";

export default function Menu() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Verifica si la vista es móvil
  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", checkIfMobileView);
    checkIfMobileView();

    const handleScroll = () => {
      const main = document.querySelector("main");
      if (main) {
        const mainOffset =
          main.offsetTop + main.offsetHeight - (main.offsetHeight - 100);
        setIsScrolledPastMain(window.pageYOffset > mainOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIfMobileView);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Maneja la apertura y cierre del menú móvil
  useEffect(() => {
    const handleToggleMenu = () => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden"; // Bloquea el scroll
      } else {
        document.body.style.overflow = ""; // Habilita el scroll
      }
    };

    handleToggleMenu();

    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se habilite cuando se desmonte el componente
    };
  }, [isMobileMenuOpen]);

  // Maneja los cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("");
      }
    };

    handleHashChange(); // Verificación inicial
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Verifica el pathname para resetear la sección activa cuando no hay hash
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      setActiveSection("");
    } else {
      setActiveSection(hash);
    }
  }, [pathname]);

  const menuOptions = [
    { name: "Why Optiks", path: "#why-optiks" },
    { name: "Services", path: "#services" },
    { name: "Our clients", path: "#our-clients" },
    { name: "Contact", path: "#contact" },
  ];

  const iconColor = "#ffffff";

  const socialOptions = [
    {
      name: "Instagram",
      icon: <InstagramIcon color={iconColor} className="h-8" />,
      link: "https://www.instagram.com/lade.rh/",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon color={iconColor} className="h-8" />,
      link: "https://www.facebook.com/LadeRH1/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon color={iconColor} className="h-8" />,
      link: "https://www.linkedin.com/in/doravaldez/",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (path) => {
    const element = document.getElementById(path.replace("#", ""));
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", path);
      setActiveSection(path);
    }
    closeMobileMenu();
  };

  const headerClasses = `flex gap-12 my-5 md:gap-6 items-center justify-center w-full mx-auto inline-block transition-all duration-300 z-40 fixed max-w-[100vw] ${isScrolledPastMain ? "" : ""} ${isMobileMenuOpen ? "" : ""}`;

  return (
    <>
      <nav className={headerClasses}>
        <div className="desktop-menu flex gap-5 w-full max-w-[900px] xl:max-w-[1000px] justify-start mx-auto bg-white backdrop-blur-3xl bg-opacity-90 rounded-full px-2 py-1.5 border border-primary border-opacity-10 items-center">
          <div className="flex justify-between w-full items-center gap-8 lg:gap-12 2xl:gap-20 pl-5">
            <Logo />
            <ul className="flex gap-6 lg:gap-10 2xl:gap-2 items-center">
              {menuOptions.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleMenuClick(option.path)}
                    className="cursor-pointer"
                  >
                    <span
                      className={`inline-flex text-secondaryBlue !leading-loose font-monument uppercase tracking-wider text-[11px] px-5 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${activeSection === option.path ? "bg-greenLighter hover:bg-greenLighter" : ""}`}
                    >
                      {option.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isMobileView && (
          <div className="flex justify-between w-full bg-white px-4 py-3 items-center rounded-full fixed z-50 top-[20px] mx-[10px] max-w-[95vw]">
            <div className="pl-2">
              <Logo />
            </div>
            <button className="hamburger-icon" onClick={toggleMobileMenu}>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
            </button>
            {isMobileMenuOpen && (
              <div className="mobile-menu bg-primary text-white transition duration-300">
                <ul className="flex flex-col gap-6 p-4 items-start">
                  {menuOptions.map((option, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleMenuClick(option.path)}
                        className="cursor-pointer"
                      >
                        <span
                          className={`text-secondaryBlue cursor-pointer text-base uppercase font-monument tracking-wider  ${activeSection === option.path ? "bg-greenLighter hover:bg-greenLighter" : ""}`}
                        >
                          {option.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-6 items-center p-6">
                  {socialOptions.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        target="_blank"
                        className="text-inherit"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>

      <style jsx>{`
        .hamburger-icon {
          display: none;
        }
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 1024px) {
          .hamburger-icon {
            display: block;
            cursor: pointer;
          }
          .line {
            width: 30px;
            height: 2px;
            background-color: #3b46ba;
            margin: 6px;
            transition: transform 0.4s;
          }
          .open:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .open:nth-child(2) {
            opacity: 0;
          }
          .open:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: ${isScrolledPastMain ? "80px" : "112px"};
            left: 10px;
            width: calc(100vw - 20px);
            height: ${isScrolledPastMain
              ? "calc(100vh - 80px)"
              : "calc(100vh - 112px)"};
            background-color: #fff;
            border-radius: 32px;
            padding: 20px;
            z-index: 999;
            transform: translateX(${isMobileMenuOpen ? "0" : "-100%"});
            transition: transform 0.3s ease-in-out;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
