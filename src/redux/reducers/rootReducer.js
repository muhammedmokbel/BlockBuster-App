import {combineReducers} from 'redux'

import moviesReducer from './moviesReducer'
import seriesReducer from './seriesReducer'
import celebritiesReducer from './celebritiesReducer'



const rootReducer = combineReducers({
    moviesReducer , 
    seriesReducer ,
    celebritiesReducer
})

export default rootReducer