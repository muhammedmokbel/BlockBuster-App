import React from 'react'

import { ChevronForward} from 'react-ionicons'


const BreadCumb = () => (

        <ul class="breadcumb">
            <li class="active"><a href="#">Home</a></li>
            <li> <ChevronForward  width="14px" height="14px" color={"white"} /> movie listing</li>
        </ul>
    
)

export default BreadCumb