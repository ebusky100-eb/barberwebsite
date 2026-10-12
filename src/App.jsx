
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Booking from "./components/Booking";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  const [searchStyle, setSearchStyle] = useState("");

     

  return (
    <>

      <Navbar
        searchStyle={searchStyle}
        setSearchStyle={setSearchStyle}
      />

      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        
      </Routes>

      <Services/>
      <Gallery searchStyle={searchStyle} />
      <WhyChooseUs/>
      <Booking />
      <Footer/>
      
    </>
  );
}

export default App;
