import * as actionTypes from '../actionTypes'
import {request} from '../../services/request'
import * as celebritiesServiceObject from '../../services/serviceObjects/celebritiesObjects'



// get trend person sync
export const getTrendPerson = ({results = []}) => ({
    type : actionTypes.GET_TRENDS_PERSON, 
    payload : results
})

// get person Async
export const getCelebritiesAsync =  () => {
    return  dispatch => {
       return Promise.all([
            request(celebritiesServiceObject.trendPerson())])
        .then(res => {
            dispatch(getTrendPerson(res[0]))
        })
    }
}