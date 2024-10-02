import React from 'react'


const SideNavInfoItem = ({job , original_name , genres}) => (
    !genres && job ? 
    <div class="sb-it">
        <h6>{job}: </h6>
        <p><a href="#">{original_name}</a></p>
    </div> :  genres ? 

    <div  class="sb-it">
    <h6>Genres: </h6>
    <p >
     {genres.map(item => (
      
        <a key={item.id} href="#">{item.name}, </a>
       

        ))}
    </p>
        </div> : null
   
)


export default SideNavInfoItem;