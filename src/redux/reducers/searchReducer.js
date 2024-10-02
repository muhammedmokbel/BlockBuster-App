import * as actionTypes from '../actionTypes'



const initState = {
    searchResults : [] ,  
    releaseYear : new Array(52).fill().map((item , index) => new Date().getFullYear() - index  )
}

const searchReducer = (state = initState , action) => {

    switch (action.type) {
        case actionTypes.SEARCH_BY_DATA:
            return {
                ...state , 
                searchResults : action.payload 
            }
        default:
            return state 
    }

}

export default searchReducer