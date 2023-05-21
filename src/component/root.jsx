import Banner from "./banner";
import Services from "./services/services";
import Showreel from "./showreel";
import ContactSection from "./contact/contactSection";
import About from "./about/about";
import ScrollToTopButton from "./ScrollToTopButton";

function Root() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Showreel />
      <ContactSection />
      <ScrollToTopButton />
    </div>
  );
}

export default Root;
