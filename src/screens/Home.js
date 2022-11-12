import React from 'react';
import HeroSection from '../components/commonSection';
import FeatureProduct from '../components/FeatureProduct';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
const Home = () => {
     const homeData = {
          name: "Ecomerce Home"
     }
     return (
          <>
               <HeroSection data={homeData} />
               <Services />
               <FeatureProduct />
               <Trusted />
          </>

     )
}
export default Home
