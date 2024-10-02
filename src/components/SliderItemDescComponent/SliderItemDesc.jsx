import React from 'react'


const SliderItemDesc = ({poster_path , original_title, original_name , overview, genre_names , vote_average}) => (
    <div class="item d-flex">
        <div class="trailer-img">
            <img src={poster_path}  alt="photo by Barn Images" width="100" height="100" />
        </div>
        <div class="trailer-infor">
            <h4 class="desc">{original_name}</h4>
            {/* <p>{genre_names[0]}</p> */}
        </div>
    </div>
)

export default SliderItemDesc