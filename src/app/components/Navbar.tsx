"use client";

import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Portfolio", path: "/Portfolio" },
  ];

  return (
    <nav className="bg-gray-195 text-black px-6 py-4 flex justify-between items-center relative">
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
      <ul className="hidden md:flex space-x-10 items-center font-montserrat text-md">
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
              <FaChevronDown className="ml-1 w-3 h-3" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <Link
          href="/contact"
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
        <div className="absolute bg-white top-full left-0 w-full bg-gray-195 shadow-md flex flex-col items-center py-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 text-lg font-montserrat ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-montserrat font-medium hover:bg-blue-800 transition-colors duration-300 shadow-md text-sm"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
