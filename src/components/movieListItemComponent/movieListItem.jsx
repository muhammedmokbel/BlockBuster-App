import React from 'react'
import moment from 'moment'

import {Star} from 'react-ionicons'



const MovieListItem = ({poster_path , first_air_date , original_name ,  original_title , overview , media_type, release_date , vote_average}) => (
    <div class="movie-item-style-2">
        <img src={poster_path} alt="" />
        <div class="mv-item-infor">
            <h6><a href="moviesingle.html">{original_title || original_name} <span>({release_date && release_date.split('-')[0] || first_air_date && first_air_date.split('-')[0]})</span></a></h6>
            <p class="rate"><Star color={'gold'} width="20px" height="20px" style={{marginRight : "5px"}} /><span>{vote_average}</span> /10</p>
            <p class="describe">{overview}</p>
            <p class="run-time"><span style={{marginLeft : "0"}}>Release: {release_date && moment(release_date).format('DD MMMM YYYY') || first_air_date && moment(first_air_date).format('DD MMMM YYYY')}</span></p>
            <p>Media type: <a href="#">{media_type}</a></p>
            {/* <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p> */}
        </div>
    </div>
)

export default MovieListItem