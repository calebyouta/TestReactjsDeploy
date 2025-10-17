import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";
import Home from "../components/home";
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
