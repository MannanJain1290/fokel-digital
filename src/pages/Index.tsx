import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryInNumbers from "@/components/StoryInNumbers";
import Marquee from "@/components/Marquee";

import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      
      <About />
      <StoryInNumbers />
      <Services />
      <FeaturedWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
