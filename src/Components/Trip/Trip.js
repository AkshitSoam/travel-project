import React from 'react'
import './Trip.css';
import standing_girl from '../../Assets/6.jpg';

function Trip() {
  return (
    <div className='Trip'>
        <div className='trip-conatiner'>
            <div className='trip-content'>
                <div className='trip-heading'>
                    <h1>Recent Trips</h1>
                    <p className='trip-para'>You can discover unique destination
                       using Google Maps
                    </p>
                </div>

                <div className='Cards'>
                    <div className='card'>
                        <div className='card1'>
                            <div className='image-trip-1'>
                              
                            </div>
                          
                           <h3>Trip in Indonesia</h3>
                           <p>
                           Indonesia ,officiaaly the repuublic of <br/>
                             indonesia,is a country in southeast asia <br/>
                             and Oceania between the indian and <br/>
                             pacific ocean. it consist of over 17,000<br/>
                             inslands,including smarta.
                           </p>
                      </div>
                       
                    </div>

                    <div className='card'>
                         <div className='card1'>
                             <div className='image-trip-2'>
                              
                              </div>
                             
                             <h3>Trip in Malaysia</h3>
                             <p>Indonesia ,officiaaly the repuublic of <br/>
                             indonesia,is a country in southeast asia <br/>
                             and Oceania between the indian and <br/>
                             pacific ocean. it consist of over 17,000<br/>
                             inslands,including smarta.

                             </p>
                          </div>    
                    </div>

                    <div className='card'>
                       <div className='card1'>
                           <div className='image-trip-3'>
                              
                           </div>
                          <h3>Trip in France</h3>
                          <p>
                          Indonesia ,officiaaly the repuublic of <br/>
                             indonesia,is a country in southeast asia <br/>
                             and Oceania between the indian and <br/>
                             pacific ocean. it consist of over 17,000<br/>
                             inslands,including smarta.
                          </p>
                      </div>                        
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Trip