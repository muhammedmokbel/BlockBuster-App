import React from 'react'

import {Heart , Cart} from 'react-ionicons'


const IntroDetails = () => (
    <div>   
        <h1 class="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>
        <div class="social-btn">
            <a href="#" class="parent-btn"> <Heart   cssClasses="icons-style"  />    Add to Favorite</a>

            <a href="#" class="parent-btn"> <Cart  cssClasses="icons-style" /> Add to Watchlist</a>		
        </div>
    </div>

)

export default IntroDetails;