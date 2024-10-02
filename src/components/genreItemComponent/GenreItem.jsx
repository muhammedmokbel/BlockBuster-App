import React from 'react'


const GenreItem = ({keywords}) => (
    <div class="sb-it">
        <h6>Plot Keywords:</h6>
        <p class="tags">
            {keywords.map(item => 
            <div style={{padding : "2px"}} key={item.id} > 
            <span   class="time"><a href="#">{item.name}</a></span> 
            </div>
            )}
        </p>
    </div>
)

export default GenreItem; 