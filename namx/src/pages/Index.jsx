import React from "react";
import About from "../components/About";
import Developers from "../components/Developers";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Subscribe from "../components/Subscribe";
import Teams from "../components/Teams";
import Banner from "../components/Banner";


function Index() {
  return (
    <div className="overflow-hidden">
      {/* <Banner /> */}
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Developers />
      {/* <Subscribe /> */}
      <Teams />
      <Footer />
    </div>
  );
}

export default Index;
