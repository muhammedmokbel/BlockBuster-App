import * as actionTypes from '../actionTypes'
import * as moviesObject from '../../services/serviceObjects/moviesObject'
import * as moviesActions from './moviesActions'

import {request} from '../../services/request'

// change current page Sync
const changeCurrentPagination = newPage => ({
    type : actionTypes.CHANGE_PAGINATION , 
    payload : newPage
})

// change item showing per page 
export const changeItemPerPage = (Pages , current) => ({
    type : Pages == "10" ?  actionTypes.CHANGE_ITEM_PER_PAGE_TO_TEN  : actionTypes.CHANGE_ITEM_PER_PAGE_TO_TWENTY, 
    payload : current

})

export const changeItemRange = (newPage) => ({
    type : actionTypes.CHANGE_ITEM_PER_PAGE_RANGE , 
    payload : newPage
})

// change current page Async 

export const changeCurrentPaginationAsync = (newPage , movieType , showPage) => {
    return dispatch => {
        if (movieType == 'trend')
       return  request(moviesObject.trendMovie({page :showPage == "20" ? newPage : Math.floor( (newPage + 1) / 2 ) }))
        .then(res =>{
             dispatch(moviesActions.getTrendMovie(res))
             dispatch(changeCurrentPagination(newPage))
            } )
    }
}

