"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiExpo, SiMysql, SiMongodb, SiGooglecloud, SiJest, SiSelenium } from "react-icons/si";
import ArchitectureServiceAWSAmplify from "aws-react-icons/icons/ArchitectureServiceAWSAmplify";

import {
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaAngular,
  FaReact,
} from "react-icons/fa";
import {
  SiDotnet,
  SiGo,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiPostgresql } from "react-icons/di";

const tabs = [
  { name: "Server-side" },
  { name: "Frontend" },
  { name: "Mobile" },
  { name: "Database" },
  { name: "Cloud Services" },
  {name: "QA"},
];

const techData: Record<string, { name: string; icon: ReactNode }[]> = {
  "Server-side": [
    { name: ".NET", icon: <SiDotnet size={50} className="text-purple-600" /> },
    {
      name: "Node.Js",
      icon: <FaNodeJs size={50} className="text-green-600" />,
    },
    { name: "PHP", icon: <FaPhp size={50} className="text-indigo-500" /> },
    { name: "Java", icon: <FaJava size={50} className="text-orange-600" /> },
    {
      name: "Python",
      icon: <FaPython size={50} className="text-yellow-400" />,
    },
    { name: "Laravel", icon: <SiLaravel size={50} className="text-red-500" /> },
  ],
  Frontend: [
    { name: "Angular", icon: <FaAngular size={50} className="text-red-600" /> },
    { name: "React", icon: <FaReact size={50} className="text-blue-500" /> },
    {
      name: "Vue.Js",
      icon: <SiVuedotjs size={50} className="text-green-500" />,
    },
    { name: "Next.Js", icon: <SiNextdotjs size={50} className="text-black" /> },
  ],
  Mobile: [
    {
      name: "React Native",
      icon: <FaReact size={50} className="text-blue-500" />,
    },
    { name: "Flutter", icon: <FaReact size={50} className="text-sky-400" /> },
    { name: "Expo", icon: <SiExpo size={50} className="text-black" /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql size={50} className="text-sky-700" /> },
    {
      name: "PostgreSQL",
      icon: <DiPostgresql size={50} className="text-blue-700" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-600" />,
    },
  ],
  "Cloud Services": [
    {
      name: "AWS",
      icon: (
        <ArchitectureServiceAWSAmplify size={50} className="text-orange-500" />
      ),
    },
    {
      name: "Azure",
      icon: <VscAzure size={50} className="text-blue-600" />,
    },

    {
      name: "Google Cloud",
      icon: <SiGooglecloud size={50} className="text-blue-500" />,
    },
  ],
  "QA": [
    {
      name: "Jest",
      icon: (
        <SiJest size={50} color="#F97316"/>
      ),
    },
    {
      name: "Selenium",
      icon: <SiSelenium size={50} className="text-green-500" />
    },
  ],
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  // Auto tab switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((tab) => tab.name === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].name;
      });
    }, 3000); // Change tab every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:py-16 py-8 md:px-28 px-14 bg-gray-50 text-center ">
      <h2 className="text-xl md:text-4xl font-bold mb-10 font-montserrat">
        Technologies we work with
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`md:px-4 px-2 font-montserrat md:py-2 py-1 md:text-base text-sm font-medium border-b-2 transition-colors duration-300 ${
              activeTab === tab.name
                ? "border-purple-600 text-purple-600"
                : "border-transparent hover:text-purple-600"
            }`}
          >
            {tab.name}
          </motion.button>
        ))}
      </div>

      {/* Technologies Grid with Animation */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-10  max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {(techData[activeTab] || []).length > 0 ? (
            techData[activeTab].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col font-montserrat items-center hover:scale-110 transition-transform duration-300"
              >
                <div className="mb-2">{tech.icon}</div>
                <p className="text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full font-montserrat text-gray-500 text-lg"
            >
              No technologies available for this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
