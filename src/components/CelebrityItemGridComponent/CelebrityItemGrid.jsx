import React from 'react'


import {dummyImage} from '../../assets/importsAssets'

const CelebrityItemGrid = ({known_for_department , name , profile_path , known_for}) => (
    <div class="ceb-item">
        <a href="celebritysingle.html">
        <img 
        width="270px"
         height="400px" 
         src={profile_path} alt=""
         onError={e =>{e.target.onerror = null;  e.target.src = dummyImage}}  />
         </a>
        <div class="ceb-infor">
            <h2><a href="celebritylist.html">{name}</a></h2>
            <span>{known_for_department}</span>
        </div>
    </div>
)


export default CelebrityItemGrid