import React from 'react'
import * as topBarFilterActions from '../../redux/actionGenerators/topBarFilterActions'

import {connect} from 'react-redux'

import {ListOutline , Grid , GridOutline} from 'react-ionicons'

const TopBarFilter = ({changeView , contant , direction , sortBy , mediaType , view , sortByPopularity , sortByRating , sortByReleaseDate}) => (
    <div class="topbar-filter">
        {console.log(sortBy , direction)}
        <p>Found <span>1,608 {mediaType}</span> in total</p>
        <label>Sort by:</label>
        {mediaType != "celebrities" ? 
         <select
         value={sortBy.toLowerCase() + "-" + direction}
         onChange={(e) =>{
           
             switch(e.target.value.split('-')[0])
             {
                 case "popularity" : 
                     sortByPopularity(e.target.value.split('-')[1])
                 break 
                 case "rating" : 
                     sortByRating(e.target.value.split('-')[1])
                 break 
                 case "date" : 
                     sortByReleaseDate(e.target.value.split('-')[1])
 
             }
         } }>
             <option value="popularity-Descending">Popularity Descending</option>
             <option value="popularity-Ascending">Popularity Ascending</option>
             <option value="rating-Descending">Rating Descending</option>
             <option value="rating-Ascending">Rating Ascending</option>
             <option value="date-Descending">Release date Descending</option>
             <option value="date-Ascending">Release date Ascending</option>
             
         </select> :  <select
          value={sortBy.toLowerCase() + "-" + direction}
        onChange={(e) =>{
          
            switch(e.target.value.split('-')[0])
            {
                case "popularity" : 
                    sortByPopularity(e.target.value.split('-')[1])
                break 
                case "rating" : 
                    sortByRating(e.target.value.split('-')[1])
                break 
                case "date" : 
                    sortByReleaseDate(e.target.value.split('-')[1])

            }
        } }>
            <option value="popularity-Descending">Popularity Descending</option>
            <option value="popularity-Ascending">Popularity Ascending</option>
         
            
        </select> }
       
       {contant != "details" ?
       <>
         <a href="#" class="list"><ListOutline onClick={() => changeView('list')} style={{marginRight : "5px"}} color="white" cssClasses={view == "list" ? "active" :  'test' } /></a>
         <a  href="#" class="grid"> <GridOutline onClick={() => changeView('grid')} style={{marginTop : "5px"}} color="white" cssClasses={view == "grid" ? "active" :  'test' } /> </a>
        </> : null }
        
      
    </div>
)

const mapStateToProps = state => ({
    view :  state.topBarFilterReducer.view , 
    sortBy : state.topBarFilterReducer.sortBy  , 
    direction : state.topBarFilterReducer.direction 
})

const mapDispatchToProps = dispatch => ({
    changeView : (view) => view == "list" ? dispatch(topBarFilterActions.changeToListView())  
    :   dispatch(topBarFilterActions.changeToGridView()) , 
    sortByPopularity : (val) => dispatch(topBarFilterActions.sortByPopularity(val)) , 
    sortByRating : (val) => dispatch(topBarFilterActions.sortByRating(val)) , 
    sortByReleaseDate : (val) => dispatch(topBarFilterActions.sortByReleaseDate(val))
})

export default connect(mapStateToProps , mapDispatchToProps)(TopBarFilter) 