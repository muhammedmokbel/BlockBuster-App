

export const trendPerson = ({page = 1} = {}) => ( {
    url : '/trending/person/day' , 
    method : 'GET' , 
    params : {
        page
    }
})