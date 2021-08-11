import * as actionTypes from '../actionTypes'
import * as searchObject from '../../services/serviceObjects/searchObject'

import {request} from '../../services/request'


// updating search results sync
export const searchResults = ({results = []} = {}) => ({
    type : actionTypes.SEARCH_BY_DATA , 
    payload : results
})


// updating search results Async 

export const searchResultsAsync = (searchData = {} , mediaType ) => {
 

    return dispatch => {

        if (mediaType == "movies")
            return request(searchObject.searchDataMovies(searchData))
            .then(res => dispatch(searchResults(res)))
        else if (mediaType == "tv")
            return request(searchObject.searchDataTv(searchData))
            .then(res => dispatch(searchResults(res)))
        else if (mediaType == "celebrities")
            return request(searchObject.searchDataPerson(searchData))
            .then(res => dispatch(searchResults(res)))

    }

}