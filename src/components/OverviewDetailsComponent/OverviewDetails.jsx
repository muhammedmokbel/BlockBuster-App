import React from 'react'

import {connect} from 'react-redux'

import {Formatting} from '../../selectors/formatting'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


import MediaItem from '../MediaItemComponent/MediaItem'
import CastItemOverview from '../castItemOverviewComponent/CastItemOverview'
import ReviewItemOverview from '../reviewItemOverviewComponent/ReviewItemOverview'
import SideNavInfoItem from '../sideNavInfoItemComponent/sideNavInfoItem'
import GenreItem from '../genreItemComponent/GenreItem'

const OverviewDetails = ({movieDetails}) => (

    <div id="overview" class="tab active">
        
    <div class="row">
        <div class="col-md-8 col-sm-12 col-xs-12">
            <p>{movieDetails.overview}</p>
            {/* <MediaItem /> */}
            <div class="title-hd-sm">
                <h4>cast</h4>
                <a href="#" class="time">Full Cast & Crew <FontAwesomeIcon icon={faChevronRight}/> </a>
            </div>
            <div class="mvcast-item">	
            
            {movieDetails.credits.cast.slice(0,8).map(item => <CastItemOverview key={item.cast_id} {...item} />)}										
               
          

            </div>
            <div class="title-hd-sm">
                <h4>User reviews</h4>
                <a href="#" class="time">See All 56 Reviews <FontAwesomeIcon icon={faChevronRight}/> </a>
            </div>

            {movieDetails.reviews.results.length ? 
            movieDetails.reviews.results.slice(0,1).map(item =>  <ReviewItemOverview key={item.id} {...item}/> ) 
            : <p>there's no review yet, if you want to write one <a href="#"> Click here</a> </p>}
           
            
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12">
            

                
           
           <SideNavInfoItem
            {...movieDetails.credits.crew.find((item) => item.job == "Director" )}
           />

            <SideNavInfoItem
            {...movieDetails.credits.crew.find((item) => item.job == "Screenstory" )}
           />

            <SideNavInfoItem
            {...movieDetails.credits.crew.find((item) => item.job == "Producer" )}
           />

            <SideNavInfoItem
            genres={movieDetails.genres}
           />

            
           <GenreItem 
           keywords={movieDetails.keywords.keywords}/>

            
            {/* <div class="ads">
                <img src="images/uploads/ads1.png" alt="">
            </div> */}
        </div>
    </div>
</div>
)

const mapStateToProps = state => {
    console.log(state)
    return {
        movieDetails : Formatting(state.moviesReducer.movieDetails)
    }
}


export default connect(mapStateToProps)(OverviewDetails)