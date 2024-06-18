import React from 'react'
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ContactPage from'../../Components/ContactPage/ContactPage';

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactPage/>
        <Footer/>
    </div>
  )
}

export default Contact