"use client"
import React, { useEffect } from "react";
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
import Team from "./components/team";


const Home = () => {

const API_KEY= process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  useEffect(()=>{
    console.log("API", API_KEY)
  })

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
