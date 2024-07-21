import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Cards from "./components/Cards"
import About from "./components/About";


export default function Home() {
  return (
    <main>
        <div className="w-full h-screen">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Cards/>
          <Contact/>
        </div>
    </main>
  );
}
