"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().getFullYear().toString());
  }, []);
  return (
    <footer className="bg-gradient-to-r text-white from-slate-900 to-slate-700 w-full pt-0 lg:pt-16 font-montserrat">
      <div className="px-4 md:px-2 lg:px-5 lg+:px-20 2xl:px-56 3xl:px-80 py-6 grid lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm md:text-base text-lightGray">
            TrivexTech Pvt Ltd is a Sri Lanka–based software company building
            scalable web, mobile, and AI solutions.
          </p>
        </div>
        <div className="space-y-1 lg:space-y-4">
          <h3 className="text-sm md:text-base font-semibold text-white">
            Office
          </h3>
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <p className="text-sm md:text-base text-lightGray">
              Head Office : Colombo, Sri Lanka
            </p>
            <p className="text-sm md:text-base text-white underline">
              hello@trivextech.com
            </p>
            <Link
              className="text-sm md:text-base text-white"
              href="tel:+94777152490"
            >
              <span className="text-sm md:text-base text-white">
                +94 777 152 490
              </span>
              {/* +94 777 152490(Hotline) */}
            </Link>
            <Link
              className="text-sm md:text-base text-white"
              href="tel:+94773223282"
            >
              <span className="text-sm md:text-base text-white">
                +94 773 223282
              </span>
              {/* +94 777 152490(Hotline) */}
            </Link>
            {/* <p className="text-sm md:text-base text-white">+94 773 223282</p> */}
          </div>
        </div>
        <div className="space-y-1 lg:space-y-4">
          <h3 className="text-sm md:text-base font-semibold text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-y-2 lg:gap-y-4 text-sm md:text-base text-offWhite">
            <li className="hover:underline w-fit">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline w-fit">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1 lg:space-y-4">
          <h3 className="text-sm md:text-base font-semibold text-white">
            Opening Time
          </h3>
          <div className="flex flex-col gap-y-4">
            <p className="text-sm md:text-base text-lightGray leading-6">
              Mon - Fri : 9.00 am - 6.00 pm
            </p>
            <div className="flex items-center gap-x-5">
              <Link
                aria-label="Visit our Facebook page"
                href="https://www.facebook.com/trivextech"
                target="_blank"
                className="rounded-full h-8 w-8 flex items-center justify-center border border-lightGray text-lightGray hover:bg-themeBlack hover:text-white hover:border-0"
              >
                <FaFacebookF size={15} />
              </Link>
              <Link
                aria-label="Visit our Linkedin page"
                href="https://www.linkedin.com/company/trivextech-pvt-ltd"
                target="_blank"
                className="rounded-full h-8 w-8 flex items-center justify-center border border-lightGray text-lightGray hover:bg-themeBlack hover:text-white hover:border-0"
              >
                <FaLinkedin size={15} />
              </Link>
              {/* <Link
                aria-label="Visit our Youtube page"
                href="www.youtube.com/@TrivexTech"
                target="_blank"
                className="rounded-full h-8 w-8 flex items-center justify-center border border-lightGray text-lightGray hover:bg-themeBlack hover:text-white hover:border-0"
              >
                <FaTiktok size={15} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center px-4 md:px-2 lg:px-5 lg+:px-20 2xl:px-56 3xl:px-80 py-6 border-t border-dark-300  justify-center lg:justify-normal">
        <p className="text-white font-medium text-sm md:text-base ">
          © Copyright TrivexTech Pvt Ltd All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
