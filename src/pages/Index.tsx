import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <FeaturedWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
