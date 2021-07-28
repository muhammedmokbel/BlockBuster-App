import * as actionTypes from '../actionTypes'
import * as moviesObject from '../../services/serviceObjects/moviesObject'
import {request} from '../../services/request'


// get popular movies sync 
const getPopularMovies = ({results = []}) => ( {
    type : actionTypes.GET_POPULAR , 
    payload : results
})

// get nowPlaying movies sync
const getNowPlayingMovies = ({results = []}) => ({
    type : actionTypes.GET_NOW_PLAYING,
    payload : results
})

// get topRated movies sync 
const getTopRatedMovies = ({results = []}) => ({
    type : actionTypes.GET_TOP_RATED, 
    payload : results
})

// get trend movie sync
const getTrendMovie = ({results = []}) => ({
    type : actionTypes.GET_TRENDS_MOVIE, 
    payload : results
})

// get movies async 

export const getMoviesAsync = () => {
    return dispatch => {
        return Promise.all([request(moviesObject.popularMovies()),
             request(moviesObject.nowPlayingMovies()),
             request(moviesObject.topRatedMovies()),
            request(moviesObject.trendMovie()) ])
        .then(res => {
            dispatch(getPopularMovies(res[0]))
            dispatch(getNowPlayingMovies(res[1]))
            dispatch(getTopRatedMovies(res[2]))
            dispatch(getTrendMovie(res[3]))
        })
    }

}