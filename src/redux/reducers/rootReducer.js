import {combineReducers} from 'redux'

import moviesReducer from './moviesReducer'
import seriesReducer from './seriesReducer'
import celebritiesReducer from './celebritiesReducer'
import paginationReducer from './paginationReducer'
import topBarFilterReducer from './topBarFilterReducers'
import searchReducer from './searchReducer'
import modalsReducer from './modalsReducer'



const rootReducer = combineReducers({
    moviesReducer , 
    seriesReducer ,
    celebritiesReducer , 
    paginationReducer , 
    topBarFilterReducer , 
    searchReducer,
    modalsReducer
})

export default rootReducer