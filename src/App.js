import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

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
     {/* contact me */}
     {/* footer */}
    </div>
  );
}

export default App;
