import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import Contact from './Contact';
import OurFacilities from './OurFacilities';
import SwimmingPool from './SwimmingPool';
import Gym from './Gym';
import SimpleMap from './SimpleMap';
import DIrection from './DIrection';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Skyview Apartments | Home</title>
            </Helmet>
            <div role="alert" className="alert alert-info text-white w-2/6 fixed bottom-0 left-0 right-0 z-50">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>Apply New15 for flat 15% discount</span>
</div>
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