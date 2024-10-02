import * as actionTypes from '../actionTypes'
import * as moviesObject from '../../services/serviceObjects/moviesObject'
import * as seriesObject from '../../services/serviceObjects/seriesObject'
import * as celebritiesObject from '../../services/serviceObjects/celebritiesObjects'
import * as moviesActions from './moviesActions'
import * as seriesActions from './seriesActions'
import * as celebritiesActions from './celebritiesActions'

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

export const changeCurrentPaginationAsync = (newPage , mediaType , showPage) => {
    return dispatch => {
       
        if (mediaType == 'movies')
        {

            return  request(moviesObject.trendMovie({page :showPage == "20" ? newPage : Math.floor( (newPage + 1) / 2 ) }))
            .then(res =>{
                 dispatch(moviesActions.getTrendMovie(res))
                 dispatch(changeCurrentPagination(newPage))
                } )
        }
      
        else if (mediaType == "tv")
        {
            

            return  request(seriesObject.trendTv({page :showPage == "20" ? newPage : Math.floor( (newPage + 1) / 2 ) }))
        .then(res =>{
             dispatch(seriesActions.getTrendTv(res))
             dispatch(changeCurrentPagination(newPage))
            } )

        }

        else if (mediaType == "celebrities")
        {
            return  request(celebritiesObject.trendPerson({page :showPage == "20" ? newPage : Math.floor( (newPage + 1) / 2 ) }))
            .then(res =>{
                 dispatch(celebritiesActions.getTrendPerson(res))
                 dispatch(changeCurrentPagination(newPage))
                } )
        }
        
    }
}

