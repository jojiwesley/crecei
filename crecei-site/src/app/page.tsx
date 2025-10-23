import { HeroSection } from "./sections/HeroSection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./sections/AboutSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative z-10 bg-white">
      <main className="">
       <HeroSection />
       <AboutSection />
       <ProgramsSection />
       <TestimonialsSection />
      <Footer/>
      </main>
    </div>
  );
}
