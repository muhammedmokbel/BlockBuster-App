import * as actionTypes from '../actionTypes'

const celebritiesState = {
    trendPerson : [] 
}

const celebritiesReducer = (state = celebritiesState, action) => {

    switch(action.type)
    {
        case actionTypes.GET_TRENDS_PERSON : 
            return {
                ...state , 
                trendPerson : action.payload
            }
        default : 
            return state 
    }
}

export default celebritiesReducer
