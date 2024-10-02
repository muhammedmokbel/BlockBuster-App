export const Formatting = (state) => {
    

    if (Array.isArray(state))
        return state.map(item => {
            if (item.poster_path && item.poster_path.charAt(0) == '/')
            {
                item.poster_path = 'https://image.tmdb.org/t/p/w500' + item.poster_path
            }
            
            else if (item.profile_path && item.profile_path.charAt(0) == '/')
                item.profile_path = 'https://image.tmdb.org/t/p/w500' + item.profile_path
            
            if (item.profile_path == null)
                item.profile_path = ''

            const allGenres = JSON.parse(localStorage.getItem('genres')) 
            if (Array.isArray(item.genre_ids))
                item.genre_names = item.genre_ids.map(id => allGenres.find(gen => gen.id == id))

            item.backdrop_path = 'https://image.tmdb.org/t/p/original'  + item.backdrop_path
            
            return item
        })


        if (state.poster_path && state.poster_path.charAt(0) == '/')
            state.poster_path = 'https://image.tmdb.org/t/p/w500' + state.poster_path
        
        else if (state.profile_path && state.profile_path.charAt(0) == '/')
            state.profile_path = 'https://image.tmdb.org/t/p/w500' + state.profile_path
        
        if (state.profile_path == null)
            state.profile_path = ''

        const allGenres = JSON.parse(localStorage.getItem('genres')) 
        if (Array.isArray(state.genre_ids))
            state.genre_names = state.genre_ids.map(id => allGenres.find(gen => gen.id == id))
        if (state.backdrop_path.charAt(0) == '/')
            state.backdrop_path = 'https://image.tmdb.org/t/p/original'  + state.backdrop_path
        return state ;

}