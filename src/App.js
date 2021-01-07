import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      

     {/* nav */}
     <Navigation />
     {/* header */}
     <Header />
     {/* about me */}
     <About />
     {/* skills */}
     <Skills />
     {/* projects */}
     <Projects />
     {/* contact me */}
     <Contact />
     {/* footer */}
     <Footer />
    </div>
  );
}

export default App;
