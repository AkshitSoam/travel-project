import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Hero from './Components/Hero/Hero';
import Destination from './Components/Destination/Destination';
import Trip from './Components/Trip/Trip';
import Footer from './Components/Footer/Footer';


function App() {
  return (
   
    <div className="App">
      
      
           <Navbar/>
           <Hero/>
           <Destination/>
           <Trip/>
           <Footer/>
    </div>

   
  );
}

export default App;
