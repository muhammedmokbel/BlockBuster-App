import React from 'react'

import {ListOutline , Grid , GridOutline} from 'react-ionicons'

const TopBarFilter = () => (
    <div class="topbar-filter">
        <p>Found <span>1,608 movies</span> in total</p>
        <label>Sort by:</label>
        <select>
            <option value="popularity">Popularity Descending</option>
            <option value="popularity">Popularity Ascending</option>
            <option value="rating">Rating Descending</option>
            <option value="rating">Rating Ascending</option>
            <option value="date">Release date Descending</option>
            <option value="date">Release date Ascending</option>
        </select>
        
        <a href="movielist.html" class="list"><ListOutline style={{marginRight : "5px"}} color="white" cssClasses="active" /></a>
        <a  href="moviegrid.html" class="grid"> <GridOutline style={{marginTop : "5px"}} color="white" /> </a>
    </div>
)

export default TopBarFilter