export const popularSeries = () => ( {
    url : '/tv/popular' , 
    method : 'GET'
})

export const topRatedSeries = () => ( {
    url : '/tv/top_rated' , 
    method : 'GET'
})

export const nowPlayingSeries = () => ( {
    url : '/tv/on_the_air' , 
    method : 'GET'
})

export const trendTv = ({page = 1} = {}) => ( {
    url : '/trending/tv/day' , 
    method : 'GET' , 
    params : {
        page
    }
})

export const videosTv = (id) => ( {
    url : `/tv/${id}/videos` , 
    method : 'GET'
})