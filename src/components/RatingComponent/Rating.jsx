import React from 'react'

import {Star , StarHalfOutline} from 'react-ionicons'


const Rating = () => (
    <div class="movie-rate">

        <div class="rate">
        <Star color={'gold'} style={{marginRight : "5px" , width : "30px" , height : '30px'}} />
        
            <p><span>8.1</span> /10<br />
                <span class="rv">56 Reviews</span>
            </p>
        </div>

        <div class="rate-star">
            <p>Rate This Movie:  </p>
            <Star color={'gold'} style={{marginRight : "5px" , width : "30px" , height : '30px'}} />

            <StarHalfOutline color={'gold'} style={{marginRight : "5px" , width : "30px" , height : '30px'}} />
           
          
        </div>
    </div>
    
)

export default Rating; 