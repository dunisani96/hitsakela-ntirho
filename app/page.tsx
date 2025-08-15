"use client"
import React, { useEffect } from "react";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import AboutSection from "./components/about";
import ServicesSection from "./components/services";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import OutlineButton from "./components/outline-button";
import Carousel from "./components/carousel";
import Offices from "./components/offices";
import Team from "./components/team";
import Clients from "./components/clients";


const Home = () => {

  return (
    <div className="pt-28 bg-white" >
      <Navbar/>
      <HeroSection />
      <OutlineButton name={"Contact Us"} color="blue" url={"/#contact"}/>
      <Carousel/>
      <AboutSection />
      <Team/>
      <ServicesSection />
      <ContactSection />
      <Offices/>
      <Clients/>
      <Footer />
    </div>
  );
};

export default Home;
