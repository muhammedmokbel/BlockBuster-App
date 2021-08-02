import * as actionTypes from '../actionTypes'


const initState = {
    view : 'list' , 
    sortBy : 'Popularity' , 
    direction : 'Descending'
}

const topBarFilterReducer = (state = initState , action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TO_GRID_VIEW:
            return {
                ...state , 
                view : 'grid'
            }
        case actionTypes.CHANGE_TO_LIST_VIEW : 
            return {
                ...state , 
                view : 'list'
            }
        case actionTypes.SORT_BY_POPULARITY : 
            return {
                ...state , 
                sortBy : "Popularity" , 
                direction : action.payload 
            }
        case actionTypes.SORT_BY_RATING : 
            return {
                ...state , 
                sortBy : "Rating" , 
                direction : action.payload 
            }
        case actionTypes.SORT_BY_RELEASE_DATE : 
            return {
                ...state , 
                sortBy : "Date" , 
                direction : action.payload 
            }
        default:
            return state 
    }
}

export default topBarFilterReducer