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
import msdsa1 from "../assets/img/mpddsa-02 1.webp";
import PromoCarousel from "../components/PromoCouresal";

const HomePages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return <Loading loadimg={msdsa1} />;
  }

  return (
    <>
      <SideNav />
      <div className="sm:ml-64">
        <HeroSection />
        <LogoDisplay />
        <AboutUs />
        <WhyChooseus />
        <PromoCarousel />
        <DrivingSchoolCards />
        <Membership />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default HomePages;
