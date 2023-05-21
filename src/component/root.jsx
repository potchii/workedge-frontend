import Banner from "./banner";
import Services from "./services/services";
import Showreel from "./showreel";
import ContactSection from "./contact/contactSection";
import About from "./about/about";

function Root() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Showreel />
      <ContactSection />
    </div>
  );
}

export default Root;
