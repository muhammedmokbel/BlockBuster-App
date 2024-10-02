export const popularMovies = () => ( {
    url : '/movie/popular',
    method : 'GET'
})

export const topRatedMovies = () => ( {
    url : '/movie/top_rated', 
    method : 'GET'
})

export const nowPlayingMovies = () => ( {
    url : '/movie/now_playing' , 
    method : 'GET'
})

export const trendMovie = ({page = 1} = {}) => ({
    url : '/trending/movie/day' , 
    method : 'GET', 
    params : {
        page
    }
})

export const movieDetails = (id = 0) =>( {
    url : `/movie/${id}` , 
    method : 'GET' , 
    params  : {
        append_to_response : 'credits,reviews,keywords,similar,videos'
    }
})
