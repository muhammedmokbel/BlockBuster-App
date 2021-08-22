import React from 'react'

import {connect} from 'react-redux'

import {Formatting} from '../../selectors/formatting'


const BackDrop = ({movieDetails}) => (
    <div style={{backgroundImage : `url(${movieDetails.backdrop_path})` , backgroundPosition : 'center center' , backgroundSize : 'cover'}} class="hero mv-single-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				{/* <!-- <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> --> */}
			</div>
		</div>
	</div>
</div>
)

const mapStateToProps = state => {
	return {
		movieDetails : Formatting(state.moviesReducer.movieDetails) 
	}
}

export default connect(mapStateToProps)(BackDrop)  ; 