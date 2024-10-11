import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import OurFacilities from "./OurFacilities";
import SwimmingPool from "./SwimmingPool";
import Gym from "./Gym";
import SimpleMap from "./SimpleMap";
import DIrection from "./DIrection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skyview Apartments | Home</title>
      </Helmet>
      
      <Banner></Banner>
      <Contact></Contact>
      <OurFacilities></OurFacilities>
      <SwimmingPool></SwimmingPool>
      <Gym></Gym>
      {/* <SimpleMap></SimpleMap> */}
      <DIrection></DIrection>
    </div>
  );
};

export default Home;
