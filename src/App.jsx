import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import CleaningProcess from "./components/sections/CleaningProcess";
import Gallery from "./components/sections/Gallery";
import FAQ from "./components/sections/FAQ";
import BookingForm from "./components/sections/BookingForm";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CleaningProcess />
      <Gallery />
      <FAQ />
      <BookingForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
