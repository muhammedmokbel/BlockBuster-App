import moment from "moment"

export const  sortByItems = (itemsList , {sortBy , direction}) => {

 
    return itemsList.sort((a, b) => {

        switch (sortBy) {
            case "Popularity":
                if (direction == "Descending")
                    return a.popularity > b.popularity ? -1 : 1
                else 
                    return a.popularity > b.popularity ? 1 : -1
            case "Rating" : 
                if (direction == "Descending")
                return a.vote_average > b.vote_average ? -1 : 1
                else 
                return a.vote_average > b.vote_average ? 1 : -1
            case "Date" : 
                if (direction == "Descending")
                return moment(a.release_date).unix()  > moment(b.release_date).unix()  ? -1 : 1
                else 
                return moment(a.release_date).unix()  > moment(b.release_date).unix()  ? 1 : -1
        }

    })

}