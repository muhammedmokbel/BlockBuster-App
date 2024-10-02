import React from 'react'


import CrewItem from '../CrewItemComponent/CrewItem'
import CastItem from '../castItemOverviewComponent/CastItemOverview'

const CastTab = () => (
    <div id="cast" class="tab" style={{display : 'block'}}>
    <div class="row">
        <h3>Cast & Crew of</h3>
            <h2>Avengers: Age of Ultron</h2>
        
          
       
        <div class="title-hd-sm">
            <h4>Directors & Credit Writers</h4>
        </div>
        <div class="mvcast-item">											
           
           <CrewItem /> 
          
        </div>
  
        <div class="title-hd-sm">
            <h4>Cast</h4>
        </div>
        <div class="mvcast-item">											
            
           
           <CastItem />
          
           
           
        </div>
    
        <div class="title-hd-sm">
            <h4>Produced by</h4>
        </div>
        <div class="mvcast-item">											
            <CrewItem /> 
        
        </div>
    </div>
    </div>
)

export default CastTab