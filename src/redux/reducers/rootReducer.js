import {combineReducers} from 'redux'

import moviesReducer from './moviesReducer'
import seriesReducer from './seriesReducer'
import celebritiesReducer from './celebritiesReducer'
import paginationReducer from './paginationReducer'
import topBarFilterReducer from './topBarFilterReducers'



const rootReducer = combineReducers({
    moviesReducer , 
    seriesReducer ,
    celebritiesReducer , 
    paginationReducer , 
    topBarFilterReducer
})

export default rootReducer