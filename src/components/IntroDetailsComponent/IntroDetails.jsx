import React from 'react'

import {connect} from 'react-redux'

import moment from 'moment'

import {Formatting} from '../../selectors/formatting'
import {Heart , Cart} from 'react-ionicons'


const IntroDetails = ({movieDetails}) => (
    <div>   
        <h1 class="bd-hd">{movieDetails.original_title} <span> {moment(movieDetails.release_date).format('YYYY') } </span></h1>
        <div class="social-btn">
            <a href="#" class="parent-btn"> <Heart   cssClasses="icons-style"  />    Add to Favorite</a>

            <a href="#" class="parent-btn"> <Cart  cssClasses="icons-style" /> Add to Watchlist</a>		
        </div>
    </div>

)

const mapStateToProps = state => {
    return {
        movieDetails : Formatting(state.moviesReducer.movieDetails) 
    }
}

export default connect(mapStateToProps)(IntroDetails) ;