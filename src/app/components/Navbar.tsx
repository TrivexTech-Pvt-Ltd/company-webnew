"use client";

import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// export default function Navbar() {

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Technologies", path: "#technologies" },
    { name: "Portfolio", path: "#Portfolio" },
  ];
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  //hide top of the navbar & add sticky effect to the navbar
  useEffect(() => {
    const changeNavbarPosition = () => {
      window.scrollY >= 128 ? setStickyNavbar(true) : setStickyNavbar(false);
    };
    window.addEventListener("scroll", changeNavbarPosition);
    return () => window.removeEventListener("scroll", changeNavbarPosition);
  }, []);
  return (
    <nav
      className={`${
        stickyNavbar
          ? "header-sticky bg-gradient-to-b from-[#0B0D2C] to-[#020312]"
          : "bg-transparent"
      } z-50 text-white flex justify-between items-center w-full fixed top-0 md:px-28 px-8`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="max-lg+:ml-4">
          <Logo />
        </div>
        {/* <span className="text-xl font-montserrat font-semibold">
          Trivextech<span className="text-white">.</span>
        </span> */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 items-center font-montserrat  text-md">
        {menuItems.map((item) => (
          <li key={item.name} className="relative group cursor-pointer">
            <Link
              href={item.path}
              className={`flex items-center transition-colors duration-200 ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
              {/* <FaChevronDown className="ml-1 w-3 h-3" /> */}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <Link
          href="#contact"
          className="bg-primary text-white px-4 py-4 rounded-lg font-montserrat font-medium hover:bg-blue-800 transition-colors duration-300 shadow-md text-sm"
        >
          Talk to Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute text-black  bg-white top-full left-0 w-full bg-gray-195 shadow-md flex flex-col items-center py-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 md:text-2xl text-sm font-montserrat ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-montserrat font-medium hover:bg-blue-800 transition-colors duration-300 shadow-md text-sm"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
