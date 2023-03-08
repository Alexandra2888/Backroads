import React from "react";
import "./App.css";
import Navbar from "./UI/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./UI/Footer"



const App = () => {
  return (
      <React.Fragment>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Tours />
  <Footer />
  </React.Fragment>
  )
}






export default App;
