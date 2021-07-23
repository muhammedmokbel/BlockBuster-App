
import * as actionTypes from '../actionTypes'

const moviesState = {
    popular : [] , 
    topRated : [] , 
    nowPlaying : [] ,
    trendMovies : [] , 
}

const moviesReducer = (state = moviesState , action) => {
        switch(action.type)
        {
            case actionTypes.GET_POPULAR :
                return {
                    ...state , 
                    popular : action.payload
                }
            case actionTypes.GET_TOP_RATED : 
                return {
                    ...state , 
                    topRated : action.payload
                }
            case actionTypes.GET_NOW_PLAYING : 
                return {
                    ...state , 
                    nowPlaying : action.payload
                }
            case actionTypes.GET_TRENDS_MOVIE : 
                return {
                    ...state , 
                    trendMovies : action.payload , 
                }
            default : 
                return state
        }
}

export default moviesReducer