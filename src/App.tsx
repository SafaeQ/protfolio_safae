import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Abouts from './components/Abouts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" max-w-[1440px] mx-[auto] my-0">
    <Navbar />
    <Home />
    <Abouts />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
