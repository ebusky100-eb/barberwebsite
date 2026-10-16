
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

/*=====================================================
 IMPORTS FOR PAGES
===================================================== */
import ServicePage from "./pages/ServicePage";
import "./page css/ServicePage.css";


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
      </Routes>
      
      
      <Footer/>
      
    </>
  );
}

export default App;
