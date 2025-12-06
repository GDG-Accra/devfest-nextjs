import React, { useState, useEffect, useRef } from "react";
import { Mic, Users, Menu, X } from "lucide-react";
import { TbMessage2Question } from "react-icons/tb";
import DFLogo from "@/app/assets/images/Logos/DFLogo-Accra.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/speakers")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveItem("speakers");
    } else if (currentPath.includes("/teams")) {
      setActiveItem("teams");
    } else if (currentPath.includes("/faqs")) {
      setActiveItem("faqs");
    } else {
      setActiveItem("");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleMenuClick = (item: string): void => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const getMenuItemClasses = (item: string): string => {
    const baseClasses =
      "flex items-center transition-all duration-200 relative px-3 py-2 rounded-lg";
    const activeClasses = "text-blue-500 bg-blue-50";
    const inactiveClasses =
      "text-gray-800 hover:text-gray-600 hover:bg-gray-50";
    return `${baseClasses} ${activeItem === item ? activeClasses : inactiveClasses}`;
  };

  const getIconClasses = (item: string): string => {
    return `mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${activeItem === item ? "text-blue-500" : ""}`;
  };

  const getMobileIconClasses = (item: string): string => {
    return `h-5 w-5 flex-shrink-0 ${activeItem === item ? "text-blue-500" : "text-gray-600"}`;
  };

  return (
    <nav className="relative z-50 mt-10 lg:mt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Left side with DevFest Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={DFLogo.src}
                alt="DevFest"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform hover:scale-105"
                width={32}
                height={32}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/devfest/speakers"
              className={getMenuItemClasses("speakers")}
              onClick={() => handleMenuClick("speakers")}
            >
              <Mic className={getIconClasses("speakers")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">
                Speakers/Talks
              </span>
              {activeItem === "speakers" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-lg" />
              )}
            </Link>

            <Link
              href="/devfest/teams"
              className={getMenuItemClasses("teams")}
              onClick={() => handleMenuClick("teams")}
            >
              <Users className={getIconClasses("teams")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">
                Team
              </span>
              {activeItem === "teams" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-lg" />
              )}
            </Link>

            <Link
              href="/devfest/faqs"
              className={getMenuItemClasses("faqs")}
              onClick={() => handleMenuClick("faqs")}
            >
              <TbMessage2Question className={getIconClasses("faqs")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">
                FAQs
              </span>
              {activeItem === "faqs" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-lg" />
              )}
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="lg:hidden relative p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 shadow-md hover:shadow-lg"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`absolute h-5 w-5 sm:h-6 sm:w-6 text-gray-700 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute h-5 w-5 sm:h-6 sm:w-6 text-gray-700 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Enhanced Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-full left-4 right-4 mt-3 bg-white shadow-2xl border border-gray-100 lg:hidden z-50 overflow-hidden rounded-3xl transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100 max-h-96"
            : "opacity-0 -translate-y-4 scale-95 max-h-0 pointer-events-none"
        }`}
      >
        <div className="p-6 space-y-3">
          {/* Enhanced Speakers Menu Item */}
          <Link
            href="/devfest/speakers"
            className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              activeItem === "speakers"
                ? "bg-blue-50 text-blue-600 shadow-lg border-2 border-blue-200"
                : "text-gray-700 hover:bg-gray-50 hover:shadow-md active:scale-95"
            }`}
            onClick={() => handleMenuClick("speakers")}
          >
            <div className="flex items-center">
              <div
                className={`mr-4 p-3 rounded-xl transition-all duration-300 ${
                  activeItem === "speakers"
                    ? "bg-blue-100 shadow-lg"
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                <Mic className={getMobileIconClasses("speakers")} />
              </div>
              <span className="font-semibold text-lg">Speakers/Talks</span>
            </div>
            {activeItem === "speakers" && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
            )}
          </Link>

          {/* Enhanced Teams Menu Item */}
          <Link
            href="/devfest/teams"
            className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              activeItem === "teams"
                ? "bg-blue-50 text-blue-600 shadow-lg border-2 border-blue-200"
                : "text-gray-700 hover:bg-gray-50 hover:shadow-md active:scale-95"
            }`}
            onClick={() => handleMenuClick("teams")}
          >
            <div className="flex items-center">
              <div
                className={`mr-4 p-3 rounded-xl transition-all duration-300 ${
                  activeItem === "teams"
                    ? "bg-blue-100 shadow-lg"
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                <Users className={getMobileIconClasses("teams")} />
              </div>
              <span className="font-semibold text-lg">Team</span>
            </div>
            {activeItem === "teams" && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
            )}
          </Link>

          {/* Enhanced FAQs Menu Item */}
          <Link
            href="/devfest/faqs"
            className={`group flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              activeItem === "faqs"
                ? "bg-blue-50 text-blue-600 shadow-lg border-2 border-blue-200"
                : "text-gray-700 hover:bg-gray-50 hover:shadow-md active:scale-95"
            }`}
            onClick={() => handleMenuClick("faqs")}
          >
            <div className="flex items-center">
              <div
                className={`mr-4 p-3 rounded-xl transition-all duration-300 ${
                  activeItem === "faqs"
                    ? "bg-blue-100 shadow-lg"
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                <TbMessage2Question className={getMobileIconClasses("faqs")} />
              </div>
              <span className="font-semibold text-lg">FAQs</span>
            </div>
            {activeItem === "faqs" && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
            )}
          </Link>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-linear-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
      </div>
    </nav>
  );
};

export default Navbar;
