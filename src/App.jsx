import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Introduction />
        <div className="light-sections">
          <About />
          <Skills />
        </div>
        <Portfolio />
        <div className="light-sections">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
