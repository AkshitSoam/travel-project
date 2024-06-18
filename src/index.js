import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import About from './Routes/About/About';
import Service from './Routes/Service/Service';
import Contact from './Routes/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
     <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
</BrowserRouter>    

);


