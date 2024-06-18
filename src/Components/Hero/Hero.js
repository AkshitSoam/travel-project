import React from 'react'
import Destination from '../Destination/Destination';
import './Hero.css';

function Hero() {
  return (
    <div className='hero top'>
        <div className='hero-container'>
            <div className='hero-content'>
                <h1 className='hero-heading'>
                  Your Journey Your Story
                </h1>
                <p className="hero-para">Choose your favourite Destination</p>
                <p className="hero-para-button">Travel Plan</p>
            </div>
        </div>
    </div>       
  )
}

export default Hero;