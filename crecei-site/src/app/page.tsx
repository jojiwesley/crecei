import { HeroSection } from "./sections/HeroSection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./sections/AboutSection";
import { ServiceSection } from "./sections/ServiceSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { GallerySection } from "./sections/GallerySection";
import { FAQSection } from "./sections/FAQSection";

export default function Home() {
  return (
    <div className="relative z-10 bg-white">
      <main className="">
       <HeroSection />
       <AboutSection />
       <ServiceSection />
       <TestimonialsSection />
       <GallerySection />
       <ContactSection />
       <FAQSection />
      <Footer/>
      </main>
    </div>
  );
}
