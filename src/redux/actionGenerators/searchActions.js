import * as actionTypes from '../actionTypes'
import * as searchObject from '../../services/serviceObjects/searchObject'

import {request} from '../../services/request'


// updating search results sync
export const searchResults = ({results = []} = {}) => ({
    type : actionTypes.SEARCH_BY_DATA , 
    payload : results
})


// updating search results Async 

export const searchResultsAsync = (searchData = {} ) => {

    return dispatch => {

        return request(searchObject.searchData(searchData))
        .then(res => dispatch(searchResults(res)))

    }

}