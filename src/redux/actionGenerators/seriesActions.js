import * as actionTypes from '../actionTypes'
import * as seriesObject from '../../services/serviceObjects/seriesObject'
import {request} from '../../services/request'


// get popular series sync 
const getPopularSeries = ({results = []}) => ({
    type : actionTypes.GET_POPULAR_SERIES,
    payload : results 
})

// get topRated series sync 
const getTopRatedSeries = ({results = []}) => ({
    type : actionTypes.GET_TOP_RATED_SERIES,
    payload : results 
})

// get nowPlaying series sync 
const getNowPlayingSeries = ({results = []}) => ({
    type : actionTypes.GET_NOW_PLAYING_SERIES,
    payload : results 
})

// get trend tv sync
export const getTrendTv = ({results = []}) => ({
    type : actionTypes.GET_TRENDS_TV, 
    payload : results
})

// get videos tv sync 
const getVideosTv = (results = {} ) => ({
    type : actionTypes.GET_VIDEOS_SERIES , 
    payload : results
})

// get series sync 
export const getSeriesAsync = () => {
    return dispatch => {
      return  Promise.all([request(seriesObject.nowPlayingSeries()),
        request(seriesObject.popularSeries()), 
    request(seriesObject.topRatedSeries()),
request(seriesObject.trendTv())])
    .then(res => {

        res[3].results.slice(0,5).forEach(item => {
            request(seriesObject.videosTv(item.id))
            .then(res => {
                dispatch(getVideosTv(res.results[0]))
            })
        })
        dispatch(getNowPlayingSeries(res[0]))
        dispatch(getPopularSeries(res[1]))
        dispatch(getTopRatedSeries(res[2]))
        dispatch(getTrendTv(res[3]))
    })
    }
}
