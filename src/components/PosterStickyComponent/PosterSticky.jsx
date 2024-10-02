import React from 'react'

import {connect} from 'react-redux'

import {dummyImage} from '../../assets/importsAssets'

import {Play  , Card, Duplicate} from 'react-ionicons'

import {faImdb , } from '@fortawesome/free-brands-svg-icons'

import {} from '@fortawesome/free-regular-svg-icons'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Formatting} from '../../selectors/formatting'

import * as modalsActions from '../../redux/actionGenerators/modalsActions'


import ModalVideo from 'react-modal-video'

import 'react-modal-video/css/modal-video.min.css';


const PosterSticky = ({movieDetails , openModal , closeModal, videoModalToggle}) => (
    <div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img style={{width : '340px' , height : '521px'}} src={movieDetails.poster_path} alt="" />
					<div class="movie-btn">	
						<div style={{position : 'relative'}} class="btn-transform transform-vertical red">
							<div><a href="#" class="item item-1 redbtn"> <Play color="white" width="15px" height="15px" /> Watch Trailer</a></div>
							<div><a onClick={openModal} class="item item-2 redbtn fancybox-media hvr-grow"><Play color="white" width="15px" height="15px" /></a></div>
							<div style={{opacity : '1'}}>
								{movieDetails.videos.results.length ?
								<ModalVideo 
								channel='youtube' 
								autoplay={true} 
								isOpen={videoModalToggle} 
								videoId={movieDetails.videos.results.find(item => item.official).key} 
								onClose={closeModal}
								animationSpeed={1500}
								   /> : null }
								
							
							</div>
						</div>
						<div class="btn-transform transform-vertical">
							<div><a target="_blank" href={movieDetails.homepage} class="item item-1 yellowbtn"> <FontAwesomeIcon icon={faHouseUser}  style={{fontSize : '20px' , }} /> Homepage </a></div>
							<div><a target="_blank" href={movieDetails.homepage} class="item item-2 yellowbtn"><FontAwesomeIcon icon={faHouseUser}  style={{fontSize : '20px' , }} /></a></div>
							
						</div>
					</div>
				</div>
			</div>
)

const mapStateToProps = state => {
	console.log(state)
	return {
		movieDetails : Formatting(state.moviesReducer.movieDetails) ,
		videoModalToggle : state.modalsReducer.videoModalToggle
	}
}

const mapDispatchToProps = dispatch => {
	return {
		openModal : () => dispatch(modalsActions.openVideoModal()) , 
		closeModal : () => dispatch(modalsActions.closeVideoModal())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(PosterSticky) ; 