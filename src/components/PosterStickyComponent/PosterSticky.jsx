import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

import {Play  , Card} from 'react-ionicons'


const PosterSticky = () => (
    <div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img src={dummyImage} alt="" />
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							<div><a href="#" class="item item-1 redbtn"> <Play color="white" width="15px" height="15px" /> Watch Trailer</a></div>
							<div><a href="https://www.youtube.com/embed/o-0hcF97wy0" class="item item-2 redbtn fancybox-media hvr-grow"><Play color="white" width="15px" height="15px" /></a></div>
						</div>
						<div class="btn-transform transform-vertical">
							<div><a href="#" class="item item-1 yellowbtn"> <Card style={{marginRight : '5px'}}  width="15px" height="15px" /> Buy ticket</a></div>
							<div><a href="#" class="item item-2 yellowbtn"><Card  width="15px" height="15px" /></a></div>
						</div>
					</div>
				</div>
			</div>
)

export default PosterSticky; 