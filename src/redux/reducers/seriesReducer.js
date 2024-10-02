import * as actionTypes from '../actionTypes'

const seriesState = {
    popular : [] , 
    topRated : [] , 
    nowPlaying : [] ,
    trendSeries : [] , 
    trailers : []
}

const seriesReducer = (state = seriesState , action) => {
        switch(action.type)
        {
            case actionTypes.GET_POPULAR_SERIES :
                return {
                    ...state , 
                    popular : action.payload
                }
            case actionTypes.GET_TOP_RATED_SERIES : 
                return {
                    ...state , 
                    topRated : action.payload
                }
            case actionTypes.GET_NOW_PLAYING_SERIES : 
                return {
                    ...state , 
                    nowPlaying : action.payload
                }
            case actionTypes.GET_TRENDS_TV : 
                return {
                    ...state , 
                    trendSeries : action.payload, 
                }
            case actionTypes.GET_VIDEOS_SERIES : 
            
               
                return {
                    ...state , 
                    trailers : state.trailers.concat(action.payload)
                }
                
            default : 
                return state
        }
}

export default seriesReducer