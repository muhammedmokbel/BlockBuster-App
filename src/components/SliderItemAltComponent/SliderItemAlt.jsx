import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

import {Star , ChevronForward} from 'react-ionicons'

const SliderItemAlt = ({original_title, original_name , poster_path, vote_average}) => (
    <div class="slide-it">
        <div class="movie-item">
            <div class="mv-img">
                <img src={poster_path} alt="" width="185" height="284" />
            </div>
            <div class="hvr-inner">
                <a  href="moviesingle.html"> Read more <ChevronForward  width="14px" height="14px" color={"white"} /> </a>
            </div>
            <div class="title-in">
                <h6><a href="#">{original_title || original_name}</a></h6>
                <p><Star color={'gold'} style={{marginRight : "5px"}} /><span>{vote_average}</span> /10</p>
            </div>
        </div>
    </div>
)

export default SliderItemAlt