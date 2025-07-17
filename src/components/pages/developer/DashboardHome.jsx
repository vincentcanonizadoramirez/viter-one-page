import React from "react";
import DashboardSideNav from "../../partials/DashboardSideNav";
import DashboardUpperNav from "../../partials/DashboardUpperNav";
import About from "./about/About";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const DashboardHome = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(true);

  return (
    <>
      <DashboardUpperNav />
      <DashboardSideNav
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <section
        className={`ml-[224px] absolute top-16 w-[calc(100dvw-224px)] h-[calc(100dvh-64px)] overflow-y-scroll transition-all ease-in-out duration-300  ${
          isSideNavOpen ? "" : "!ml-0 !w-full"
        }`}
      >
        <div className="page-container">
          <div className="content-wrap">
            <div className="container max-w-full">
              <div id="header">
                <Header />
              </div>
              <div id="banner">
                <Banner />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </div>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardHome;
