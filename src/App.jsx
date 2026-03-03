import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import TechStack from "./sections/TechStack";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;