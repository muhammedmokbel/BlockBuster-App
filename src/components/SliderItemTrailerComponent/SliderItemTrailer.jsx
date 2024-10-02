import React from "react";
import { useState } from "react";

import ReactPlayer from 'react-player/youtube'


const SliderItemTrailer = ({id , isPlaying , idPlaying ,  onstart}) => { 

 
    return (
    <div>
        <ReactPlayer 
        controls
        key={id}
        width='100%' 
        height='100%' 
        url={'https://www.youtube.com/embed/' + id} />
        {/* <iframe class="item-video" src={'https://www.youtube.com/embed/' + id}  data-src={'https://www.youtube.com/embed/' + id}></iframe> */}
    </div>
)}

export default SliderItemTrailer