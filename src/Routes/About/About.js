import React from 'react'
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AboutPage from '../../Components/AboutPage/AboutPage';
import Trip from '../../Components/Trip/Trip'

function About() {
  return (
    <div>
        <Navbar/>
        <AboutPage/>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default About