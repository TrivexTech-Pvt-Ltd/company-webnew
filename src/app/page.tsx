import Image from "next/image";
import HeroSection from "./components/Home/Hero";
import AboutUs from "./about/page";
import Services from "./services/page";
import Technology from "./technologies/page";
import Portfolio from "./Portfolio/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <Services />
      <Technology />
      <Portfolio />
      <Contact />
    </div>
  );
}
