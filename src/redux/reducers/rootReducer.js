import {combineReducers} from 'redux'

import moviesReducer from './moviesReducer'
import seriesReducer from './seriesReducer'
import celebritiesReducer from './celebritiesReducer'
import paginationReducer from './paginationReducer'



const rootReducer = combineReducers({
    moviesReducer , 
    seriesReducer ,
    celebritiesReducer , 
    paginationReducer
})

export default rootReducer