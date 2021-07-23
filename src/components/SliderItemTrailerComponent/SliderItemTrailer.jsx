import React from "react";



const SliderItemTrailer = ({id}) => (
    <div>
        <iframe class="item-video" src={'https://www.youtube.com/embed/' + id}  data-src={'https://www.youtube.com/embed/' + id}></iframe>
    </div>
)

export default SliderItemTrailer