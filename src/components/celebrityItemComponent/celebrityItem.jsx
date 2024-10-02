import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

import {Star , ChevronForward} from 'react-ionicons'


const CelebrityItemList = ({known_for_department , name , profile_path , known_for}) => (
    <div class="col-md-12">
        <div class="ceb-item-style-2">
            <img 
            width="100px" 
            height="130px" 
            src={profile_path} alt=""
            onError={e =>{e.target.onerror = null;  e.target.src = dummyImage}} />
            <div class="ceb-infor">
                <h2><a href="celebritysingle.html">{name}</a></h2>
                <span>{known_for_department}</span>
                 <br/>
                <span style={{color : "whitesmoke"}}>Known by : </span>
                <ul>
                    {known_for.map(item => <li style={{color : "white"}} key={item.id}> <Star width="10px" height="10px"  color={'gold'} style={{marginRight : "5px" }} /> {item.original_title || item.original_name}</li>)}
                </ul>
                {/* <p>Dan Stevens was born at Croydon in Surrey on 10th October 1982. His parents are teachers. He was educated at Tonbridge School and trained in acting at the National Youth Theatre of Great Britain... </p> */}
            </div>
        </div>
    </div>
)


export default CelebrityItemList ; 