export const searchDataMovies = ({keyWord , region  , releaseYear   }) => ( {
    url : '/search/movie',
    method : 'GET' , 
    params : {
        query : keyWord , 
        region :  region , 
        primary_release_year : releaseYear
    }
})


export const searchDataTv = ({keyWord , region  , releaseYear   }) => ( {
    url : '/search/tv',
    method : 'GET' , 
    params : {
        query : keyWord , 
        region :  region , 
        primary_release_year : releaseYear
    }
})

export const searchDataPerson = ({keyWord , region }) => ( {
    url : '/search/person',
    method : 'GET' , 
    params : {
        query : keyWord , 
        region :  region , 
    }
})