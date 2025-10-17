import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";
export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experience />
        <Projets />
      </div>
      <Footer />
    </div>
  );
}
