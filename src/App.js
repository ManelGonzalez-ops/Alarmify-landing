import React, { useEffect } from 'react';
import './css/main.css';
import Hero from "./components/Hero/Hero"
import Section2 from "./components/section2/Section2"
import Section3 from "./components/section3/Section3"
import Section4 from "./components/section4/Section4"
import Section5 from "./components/section5/Section5"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="App" id="fullpage">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
