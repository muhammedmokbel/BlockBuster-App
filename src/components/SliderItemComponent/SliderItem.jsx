import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

import {Star} from 'react-ionicons'


const SliderItem = ({poster_path , original_title, original_name , genre_names , vote_average}) => (
    <div class="movie-item">
        <div class="mv-img">
            <a href="#"><img src={poster_path} alt={original_title || original_name} width="285" height="437" /></a>
        </div>
        <div class="title-in">

            {genre_names.slice(0,1).map((item , index) => { 
                const temp = ['blue' , 'yell' , 'green' , 'orange']
                if (item.name != 'none')
                return (
                    <div class="cate">
                    <span class={temp[Math.floor(Math.random()*temp.length)]}><a href="#">{item.name}</a></span>
                </div>
            )
             return null
        })}

        
            <h6><a href="#">{original_title || original_name}</a></h6>
            <p><Star color={'gold'} style={{marginRight : "5px"}} /><span>{vote_average}</span> /10</p>
        </div>
    </div>
)

export default SliderItem