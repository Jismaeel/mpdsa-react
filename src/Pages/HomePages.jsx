import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import HeroSection from "../components/HeroSection";
import LogoDisplay from "../components/LogoDisplay";
import AboutUs from "../components/AboutUs";
import WhyChooseus from "../components/WhyChooseus";
import DrivingSchoolCards from "../components/DrivingSchoolCards";
import Membership from "../components/Membership";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const HomePages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

   if (isLoading) {
     return <Loading />;
   }
   
  return (
    <>
      <SideNav />
      <HeroSection />
      <LogoDisplay />
      <AboutUs />
      <WhyChooseus />
      <DrivingSchoolCards />
      <Membership />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePages;
