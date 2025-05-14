import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import WhyChooseUs from "../components/WhyChooseUs";
import ApiSection from "../components/ApiSection";
import FeaturesSection from "../components/FeatureSection";
import TaskSection from "../components/TaskSection"
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full ">
      <Navbar/>
      <Herosection/>
      <WhyChooseUs/>
      <ApiSection/>
      <FeaturesSection/>
      <TaskSection/>
      <Footer/>
    </div>
  );
}

export default Home;
