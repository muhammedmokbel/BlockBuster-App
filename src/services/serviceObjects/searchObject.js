export const searchData = ({keyWord , region  , releaseYear   }) => ( {
    url : '/search/movie',
    method : 'GET' , 
    params : {
        query : keyWord , 
        region :  region , 
        primary_release_year : releaseYear
    }
})