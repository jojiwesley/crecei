import Image from "next/image";
import { HeroSection } from "./sections/HeroSection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./sections/AboutSection";

export default function Home() {
  return (
    <div className="relative z-10 bg-white">
      <main className="">
       <HeroSection />
       <AboutSection />
      <Footer/>
      </main>
    </div>
  );
}
