import React from 'react'


import {Star , ChevronForward} from 'react-ionicons'

const MovieGridItem = ({poster_path , original_name , original_title   , vote_average}) => (
    <div class="movie-item-style-2 movie-item-style-1">
        <img style={{width : "100%"}} src={poster_path} alt="" />
        <div class="hvr-inner">
            <a  href="moviesingle.html"> Read more <ChevronForward  width="14px" height="14px" color={"white"} /> </a>
        </div>
        <div class="mv-item-infor">
            <h6><a href="#">{original_title || original_name}</a></h6>
            <p class="rate"><Star color={'gold'} style={{marginRight : "5px"}} /><span>{vote_average}</span> /10</p>
        </div>
    </div>
)

export default MovieGridItem