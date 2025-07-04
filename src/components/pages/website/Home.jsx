import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
