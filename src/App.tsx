import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className=" max-w-[1440px] mx-[auto] my-0">
    <Navbar />
    <Home />
    <About />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
