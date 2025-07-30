import React from "react";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import CompanySectors from "./components/group";
import AboutSection from "./components/about";
import ServicesSection from "./components/service-section";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import OutlineButton from "./components/outline-button";
import Carousel from "./components/carousel";
import Offices from "./components/offices";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Team from "./components/team";
import HeroBanner from "./components/hero-banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12"></div>
      <HeroSection />
      <OutlineButton name={"Contact Us"} color="blue" url={"/contact"}/>
      <Carousel/>
      <AboutSection />
      <Team/>
      <ServicesSection />
      <ContactSection />
      <Offices/>
      <Footer />
    </div>
  );
};

export default Home;
