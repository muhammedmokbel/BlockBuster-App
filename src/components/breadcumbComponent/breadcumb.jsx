import React from 'react'

import { ChevronForward} from 'react-ionicons'


const BreadCumb = ({mediaType}) => (

        <ul class="breadcumb">
            <li class="active"><a href="#">Home</a></li>
            <li> <ChevronForward  
            width="14px" 
            height="14px" 
            color={"white"} /> 
            {mediaType == "tv" ? "series listing" 
            :mediaType == "celebrities" ? "celebrities" :  "movie listing" }  </li>
        </ul>
    
)

export default BreadCumb