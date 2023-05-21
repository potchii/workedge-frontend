import NavigationBar from "./navbarDark";
import style from "./Store.module.css";
import Pricing from "./pricing";
import Footer from "./footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Store() {
  return (
    <div>
      <NavigationBar />
      <ScrollToTopButton />

      <Pricing />

      <Footer />
    </div>
  );
}

export default Store;
