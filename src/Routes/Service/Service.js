import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ServicePage from '../../Components/ServicePage/ServicePage';
import Destination from '../../Components/Destination/Destination'
function Service() {
  return (
    <div>
        <Navbar/>
        <ServicePage/>
        <Destination/>
        <Footer/>
    </div>
  )
}

export default Service;