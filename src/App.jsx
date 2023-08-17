import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import About from "./components/Body/About";
import Projects from "./components/Body/Projects";
import Contact from "./components/Body/Contact";

function App() {
  return (
    <div>
      <Menu />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
