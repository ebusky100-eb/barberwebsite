import { useState } from "react";
import Hero from "./Hero";
import Services from "./Service";
import Gallery from "./Gallery";
import WhyChooseUs from "./WhyChooseUs";
import Testimonies from "./Testimonies";
import Booking from "./Booking";
import Navbar from "./Navbar";

function Home(){
    const [searchStyle, setSearchStyle] = useState("");
    <Navbar
        searchStyle={searchStyle}
        setSearchStyle={setSearchStyle}
      />
    return(
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <Gallery searchStyle={searchStyle} />
            <WhyChooseUs/>
            <Testimonies/>
            <Booking/>
        </>
    );
}

export default Home