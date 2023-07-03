import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className=" max-w-[1440px] mx-[auto] my-0">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
