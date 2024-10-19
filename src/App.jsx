import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";


const App = () => {
  return (
    <div className="bg-[#1d0d56] max-w-[1920px] mx-auto w-full py-7 ">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
