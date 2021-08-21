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
export const getTrendMovie = ({results = []}) => ({
    type : actionTypes.GET_TRENDS_MOVIE, 
    payload : results
})

// get details of movie sync 
const getMovieDetails = (result = {}) => ({
    type : actionTypes.GET_MOVIE_DETAILS , 
    payload : result
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

export const getMovieDetailsAsync = (id) => {
    return  dispatch => {
       return request(moviesObject.movieDetails(id))
        .then(res => dispatch(getMovieDetails(res)))
    }
}