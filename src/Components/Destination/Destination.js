import React from 'react';
import './destination.css';
import sea from '../../Assets/3.jpg';
import boats from '../../Assets/1.jpg';
import homi from '../../Assets/11.jpg';
import ocean from '../../Assets/8.jpg';

function Destination() {
  return (
    <div className='destination'>
        <div className='destination-contaianer'>
          <div className='destination-content'>
            <div className='destination-heading'>
              <h1>Popular Destination</h1>
              <p className='destination-para'>Tours give you the oppurtunity to see a lot, 
              within a time frame</p>
            </div>

            <div className='dest-main-content'>
              <div className='dest-para'>
                <h1>Taal volcano</h1>
                 <p>
                    one of the most iconic views in luzan,Mt. taal basstas a<br/>
                    volcano inside  lake inside an island. if you fancy a closer<br/>
                    look,the hike up to the crator is a mere 45 minutes,and is<br/>
                     easy enough for the beginners.Guides will assist you most of <br/>
                     the way, and you'll see the peculiar environment found<br/>
                      on an active volcano,including volcanic rocks and steam <br/>
                      vents.the hike can be dusty and hiot, so plan for an early<br/>
                      morining trip,ad then unwind with some bulalo before <br/>
                      heading back Home!
                 </p>
              </div>

              <div className='dest-img'>

                   <div className='dest-first-img'>
                          <img src={boats} width={250} height={290}/> 
                   </div>

                   <div className='dest-second-img'>
                      
                         <img src={sea} width={250} height={290}/>
                       
                   </div>
              </div>

            </div>

          <div className='dest-2'>

 
              <div className='dest-2-content'>
                <div className='dest-2-img'>
                  <div className='dest-2-first-img'>
                      <img src={homi}  width={250} height={290}/>
                  </div>

                  <div className='dest-2-second-img'>
                        <img src={ocean}  width={250} height={290} loading="lazy"/>
                  </div>
                </div>

                <div className='dest-2-main-content'>
                  <h1 className="destination-heading">
                   Taal volcano
                 </h1>

                 <p className='dest-para'>
                    one of the most iconic views in luzan,Mt. taal basstas a<br/>
                    volcano inside  lake inside an island. if you fancy a closer<br/>
                    look,the hike up to the crator is a mere 45 minutes,and is<br/>
                     easy enough for the beginners.Guides will assist you most of <br/>
                     the way, and you'll see the peculiar environment found<br/>
                      on an active volcano,including volcanic rocks and steam <br/>
                      vents.the hike can be dusty and hiot, so plan for an early<br/>
                      morining trip,ad then unwind with some bulalo before <br/>
                      heading back Home!
                 </p>
                </div>
                
            </div>  
          </div>
          </div>
        </div>
    </div>
  )
}

export default Destination;