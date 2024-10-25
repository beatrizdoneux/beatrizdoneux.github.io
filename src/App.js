import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Section from './components/templates/Section';

function App() {
  return (
    <div className="App container-fluid p-0 d-flex flex-column">
      <CustomNavbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
