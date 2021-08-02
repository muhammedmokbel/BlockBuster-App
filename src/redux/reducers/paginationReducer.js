import * as actionTypes from '../actionTypes'


const initState = {
    moviesPaginationNumbers : new Array(20).fill().map((_ , i) => i)  ,
    currentPage : 1 , 
    currentPageTenMode : null , 
    movieType : 'trend' , 
    numberMoviesToShow : "20" ,
    startPoint : 0 , 
    endPoint : 20 
}

const paginationReducer = (state = initState , action) => {

    switch (action.type) {
        case actionTypes.CHANGE_PAGINATION:
            return {
                ...state , 
                currentPage : state.numberMoviesToShow == "20" ?  action.payload : Math.floor((action.payload + 1) / 2)  ,
                currentPageTenMode : state.numberMoviesToShow == "10" ? action.payload  : null , 
                startPoint : state.numberMoviesToShow == "20" ? 0 : action.payload % 2 == 0 ? 10 : 0  , 
                endPoint : state.numberMoviesToShow == "20" ? 20 : action.payload % 2 == 0 ? 20 : 10
            }
        case actionTypes.CHANGE_ITEM_PER_PAGE_TO_TEN : 
            return {
                ...state , 
                numberMoviesToShow : "10" ,
                currentPageTenMode : (action.payload * 2 ) - 1, 
                moviesPaginationNumbers : new Array(40).fill().map((_ , i) => i)  ,
                startPoint :  0 , 
                endPoint :  10
            }
        case actionTypes.CHANGE_ITEM_PER_PAGE_TO_TWENTY : 
            return {
                ...state , 
                numberMoviesToShow : "20" ,
                currentPageTenMode : null , 
                moviesPaginationNumbers : new Array(20).fill().map((_ , i) => i)  ,
                startPoint : 0 , 
                endPoint : 20
            }
        case actionTypes.CHANGE_ITEM_PER_PAGE_RANGE : 
            return {
                ...state , 
                currentPageTenMode : action.payload , 
                startPoint : action.payload % 2 == 0 ? 10 : 0 , 
                endPoint : action.payload % 2 == 0 ? 20 : 10
            }
    
        default:
          return  state;
    }

}

export default paginationReducer