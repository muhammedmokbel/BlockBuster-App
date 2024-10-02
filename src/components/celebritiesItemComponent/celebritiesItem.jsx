import React from 'react'

import {dummyImage} from '../../assets/importsAssets'


const celebritiesItem = ({name , profile_path , known_for_department }) => {

    // console.log(profile_path)
    
    
    return (
    <div class="celeb-item">
    <a href="#">
    <img 
    src={profile_path} 
    alt={name} 
    width="70"
    height="70" 
    onError={e =>{e.target.onerror = null;  e.target.src = dummyImage}}/></a>
    <div class="celeb-author">
        <h6><a href="#">{name}</a></h6>
        <span>{known_for_department}</span>
    </div>
    </div>
)}

export default celebritiesItem