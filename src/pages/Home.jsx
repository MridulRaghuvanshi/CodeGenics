import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <div className="w-full ">
      <Navbar/>
      <Herosection/>
      <WhyChooseUs/>
    </div>
  );
}

export default Home;
