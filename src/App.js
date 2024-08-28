import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
