import React from 'react';
import Hero from './Hero';
import Awards from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Edjucation from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
         <Hero />
         <Awards />
         <Stats />
         <Pricing />
         <Edjucation />
         <OpenAccount />
        </>
     );
}

export default HomePage;