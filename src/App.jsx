
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

/*=====================================================
 IMPORTS FOR PAGES
===================================================== */
import ServicePage from "./pages/ServicePage";
import GalleryPage from "./pages/GalleryPage"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"
import "./page css/ServicePage.css";
import "./page css/GalleryPage.css";
import "./page css/AboutPage.css";
import "./page css/BookingPage.css";


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
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/Gallery" element={<GalleryPage/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Booking" element={<BookingPage/>}/>
      </Routes>
      
      
      <Footer/>
      
    </>
  );
}

export default App;
