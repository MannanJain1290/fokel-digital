import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StoryInNumbers from "@/components/StoryInNumbers";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import JourneyEndsHere from "@/components/JourneyEndsHere";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NeuralNetworkCanvas from "@/components/ui/NeuralNetworkCanvas";
import GlassLensCursor from "@/components/ui/GlassLensCursor";

const Index = () => {
  return (
    <>
      <SEO
        title="Fokel — Digital Studio | We Bring Your Brand Into Focus"
        description="Fokel is a digital studio that brings your business into market focus with bold, disruptive strategies. We specialize in digital marketing, web design, SEO, and branding that drives measurable results for B2B companies."
        keywords="digital marketing agency, web design company, SEO services, branding agency, social media marketing, digital strategy, B2B marketing, brand identity"
        url="https://www.fokelworks.com"
        type="website"
      />
      <div className="bg-background">
        <NeuralNetworkCanvas />
        <GlassLensCursor />
        <Navbar />
        <Hero />
        <Marquee />
        <StoryInNumbers />
        <About />
        <HowWeWork />
        <Services />
        
        <FeaturedWork />
        <Testimonials />
        <JourneyEndsHere />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Index;
