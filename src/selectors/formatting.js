export const Formatting = (state) => {
    

    return state.map(item => {
        if (item.poster_path && item.poster_path.charAt(0) == '/')
        {
            item.poster_path = 'https://image.tmdb.org/t/p/w500' + item.poster_path
            const allGenres = JSON.parse(localStorage.getItem('genres')) 

            item.genre_names = item.genre_ids.map(id => allGenres.find(gen => gen.id == id))
        }
           
        else if (item.profile_path && item.profile_path.charAt(0) == '/')
            item.profile_path = 'https://image.tmdb.org/t/p/w500' + item.profile_path
        
        if (item.profile_path == null)
            item.profile_path = ''
        
    

        
        return item
    })
}