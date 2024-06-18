import React from 'react'
import './Navbar.css';
import { FaHome,FaInfoCircle,FaToolbox,FaBook  } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-content'>
                <div className='navbar-text-left'>
                    <h1>Trippy</h1>
                </div>
                
                <div className='navbar-right-menu'>
                    <div className='routers'>
                        <Link to='/' className='routes-worked'>
                            <FaHome/> Home
                       </Link> 
                    </div>
                    <div className='routers'>
                        <Link to='/about' className='routes-worked'>
                           <FaInfoCircle/>  About
                        </Link>
                       
                    </div>
                    <div className='routers'>
                        <Link to='/service' className='routes-worked'> 
                           <FaToolbox/>  Service
                        </Link>
                       
                        </div>
                    <div className='routers'>
                        <Link to='/contact' className='routes-worked'>
                           <FaBook/>  Contact
                        </Link>
                        </div>
                    <div className='navbar-button'>Sign up</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar