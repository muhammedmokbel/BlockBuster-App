import * as actionTypes from '../actionTypes'


// change to grid view 
export const changeToGridView = () => ({
    type : actionTypes.CHANGE_TO_GRID_VIEW
})

// change to list view 
export const changeToListView = () => ({
    type : actionTypes.CHANGE_TO_LIST_VIEW
})

// sort by popularity 
export const sortByPopularity = (direction) => ({
    type : actionTypes.SORT_BY_POPULARITY , 
    payload : direction
})

// sort by rating 
export const sortByRating = (direction) => ({
    type : actionTypes.SORT_BY_RATING , 
    payload : direction
})

// sort by release date  
export const sortByReleaseDate = (direction) => ({
    type : actionTypes.SORT_BY_RELEASE_DATE , 
    payload : direction
})

