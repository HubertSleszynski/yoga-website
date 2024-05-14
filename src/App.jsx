import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
