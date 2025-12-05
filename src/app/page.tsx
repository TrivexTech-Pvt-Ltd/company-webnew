import Image from "next/image";
import HeroSection from "./components/Home/Hero";
import AboutUs from "./about/page";
import Services from "./services/page";
import Technology from "./technologies/page";
import Portfolio from "./Portfolio/page";
import Contact from "./contact/page";
import WhyChoose from "./WhyChoose/WhyChoose";
import Partners from "./components/partners/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <Services />
      <Technology />
      <WhyChoose />
      <Contact />
      <Partners />
    </div>
  );
}
