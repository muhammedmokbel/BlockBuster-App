import * as actionTypes from '../actionTypes'



const initState = {
    videoModalToggle : false , 
}


const modalsReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.OPEN_VIDEO_MODAL:
            return {
                ...state , 
                videoModalToggle :  true 
            }
        case actionTypes.CLOSE_VIDEO_MODAL : 
            return {
                ...state , 
                videoModalToggle : false 
            }
        default:
            return state 
    }
    
}

export default modalsReducer