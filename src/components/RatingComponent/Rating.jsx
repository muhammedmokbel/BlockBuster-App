import React from 'react'


import ReactStars from "react-rating-stars-component";
import {connect} from 'react-redux'

import {Formatting} from '../../selectors/formatting'

import {Star , StarHalfOutline} from 'react-ionicons'


const Rating = ({movieDetails}) => (
    <div class="movie-rate">

        <div class="rate">
        <Star color={'gold'} style={{marginRight : "5px" , width : "30px" , height : '30px'}} />
        
            <p><span>{movieDetails.vote_average}</span> /10<br />
                <span class="rv">{movieDetails.reviews.total_results} Reviews</span>
            </p>
        </div>

        <div class="rate-star">
            <p>Rate This Movie:  </p>
  
            <ReactStars
            count={10}
            onChange={(res) =>  console.log(res)}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            size={35}
            
            />

           
           
          
        </div>
    </div>
    
)

const mapStateToProps = state => {
    return {
    movieDetails : Formatting(state.moviesReducer.movieDetails) 
    }
}

export default connect(mapStateToProps)(Rating) ; 