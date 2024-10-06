/**
 * @copyright 2024 Dainius Genutis
 * @license Apache-2.0
 */

/**
 * Components
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />;
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
