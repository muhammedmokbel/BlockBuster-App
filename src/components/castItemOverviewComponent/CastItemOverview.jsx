import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

const CastItemOverview = ({profile_path , original_name , character}) => (
    <div class="cast-it">
        <div class="cast-left">
            <img width="60px" height="60px" src={'https://image.tmdb.org/t/p/w500' + profile_path} alt="" />
            <a href="#">{original_name}.</a>
        </div>
        <p>...  {character}.</p>
    </div>
)

export default CastItemOverview;