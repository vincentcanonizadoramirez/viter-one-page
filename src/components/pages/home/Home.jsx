import React from "react";
import Header from "../../partials/Header";
import BannerHome from "./BannerHome";
import Services from "./Services";
import AboutHome from "./AboutHome";
import Testimonials from "./Testimonials";
import ContactHome from "./ContactHome";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <BannerHome />
      <Services />
      <AboutHome />
      <Testimonials />
      <ContactHome />
      <Footer />
    </>
  );
};

export default Home;
