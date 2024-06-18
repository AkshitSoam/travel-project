import React from 'react'
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Destination from '../../Components/Destination/Destination';
import Trip from '../../Components/Trip/Trip';

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Hero/>
        <Destination/>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Home