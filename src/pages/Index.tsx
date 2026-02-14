import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryInNumbers from "@/components/StoryInNumbers";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import JourneyEndsHere from "@/components/JourneyEndsHere";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StoryInNumbers />
      <Marquee />
      <FeaturedWork />
      <Testimonials />
      <JourneyEndsHere />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
