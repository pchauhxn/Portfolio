import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar/>
      {/* <br/><br/><br/> */}
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
