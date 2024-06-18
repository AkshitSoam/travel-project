import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Link } from 'react-scroll';



function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-conatiner'>
            <div className='Footer-content'>
               <div className='Footer-heading-and-logos'>
                  <div className='Footer-heading-and-para'>
                    <h1>Trippy</h1>
                    <h3>Choose your favourite destination</h3>
                  </div>

                  
                    <h2  className='Footer-logos'>
                        <FaFacebook className='logos'/>
                         <FaInstagram className='logos'/>
                         <FaTwitter className='logos'/>
                    </h2>

                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                          <FaArrowAltCircleUp className="icon"/>
                     </Link>
                       
                  
               </div>

               <div className='Footer-links'>
                   <div className='Footer-links-1'>
                       <h1>Project</h1>
                       <p className='underline'>Changelog</p>
                       <p className='underline'>Status</p>
                       <p className='underline'>License</p>
                       <p className='underline'>All versions</p>
                   </div>
                   <div className='Footer-links-2'>
                       <h1>Community</h1>
                       <p className='underline'>Issues</p>
                       <p className='underline'>Project</p>
                       <p className='underline'>FaTwitter</p>
                      
                   </div>
                   <div className='Footer-links-3'>
                      <h1>Help</h1>
                       <p className='underline'>Support</p>
                       <p className='underline'>TroubleShooting</p>
                       <p className='underline'>
                          Contact us
                        </p>
                       
                   </div>
                   <div className='Footer-links-4'>
                     <h1>Others</h1>
                       <p className='underline'>Terms of services</p>
                       <p className='underline'>Privacy Policy</p>
                       <p className='underline'>License</p>
                       
                   </div>
                 
               </div>

               <hr className='horizontal-line'/>
            </div>
           
        </div>
    </div>
  )
}

export default Footer;