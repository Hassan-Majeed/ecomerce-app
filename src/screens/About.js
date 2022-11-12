import React, { useContext } from 'react';
import HeroSection from '../components/commonSection';
import { useProductContext } from '../context/productcontex';
const About = () => {
     const { name } = useProductContext()
     const aboutData = {
          name: "Ecomerce About"
     }
     return (
          <>
               <h2>{name}</h2>
               <HeroSection data={aboutData} />
          </>
     )
}

export default About
