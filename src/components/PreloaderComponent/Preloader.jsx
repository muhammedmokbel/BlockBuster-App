import React from 'react'

import {Logo} from '../../assets/importsAssets'

const PreLoader =  ({children , isloading}) => (
    isloading ? 
    <div id="preloader">
        <img class="logo" src={Logo} alt="" width="119" height="58" />
        <div id="status">
            <span></span>
            <span></span>
        </div>
    </div> : children
)

export default PreLoader