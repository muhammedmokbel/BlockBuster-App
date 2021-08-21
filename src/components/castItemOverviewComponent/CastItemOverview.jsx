import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

const CastItemOverview = () => (
    <div class="cast-it">
        <div class="cast-left">
            <img width="40px" height="40px" src={dummyImage} alt="" />
            <a href="#">Robert Downey Jr.</a>
        </div>
        <p>...  Robert Downey Jr.</p>
    </div>
)

export default CastItemOverview;