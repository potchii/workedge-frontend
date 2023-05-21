import Banner from "./banner";
import Services from "./services/services";
import Showreel from "./showreel";
import ContactSection from "./contact/contactSection";
import About from "./about/about";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./footer";

function Root() {
  return (
    <div>
      <ScrollToTopButton />
      <Banner />
      <Services />
      <About />
      <Showreel />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Root;
