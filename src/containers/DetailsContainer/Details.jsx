import React from 'react'
import {connect} from 'react-redux'

import * as movieActions from '../../redux/actionGenerators/moviesActions'

import {Formatting} from '../../selectors/formatting'

import Preloader from '../../components/PreloaderComponent/Preloader'
import BackDrop from '../../components/backDropComponent/backDrop'
import PosterSticky from '../../components/PosterStickyComponent/PosterSticky'
import IntroDetails from '../../components/IntroDetailsComponent/IntroDetails'
import Rating from '../../components/RatingComponent/Rating'
import TabsLinksDetails from '../../components/TabsLinksDetailsComponent/TabsLinksDetails'
import TabContantDetails from '../../components/TabsContantDetailsComponent/TabsContantDetails'


class Details extends React.PureComponent
{
    state = {
        isloading : true , 
        currentTab : 'Overview' , 
        tabs : [
            { tabName : 'Overview'} , 
            {tabName : 'Reviews'} , 
            {tabName : 'Cast & Crew'} , 
            // {tabName : 'Media'} , 
            {tabName : 'Related Movies'}
        ]
    }

    componentDidMount() {

        this.props.getDetails(this.props.match.params.id)
        .then(res => {
         
            this.setState({
                isloading : false 
            })
        })
    }

    handleChangeTab = (tabName) => {
      
        this.setState({
            currentTab : tabName  
        })

    }
    render(){
        return (
            <Preloader
            isloading={this.state.isloading}>
                <BackDrop />
            <div class="page-single movie-single movie_single">
	            <div class="container">
		            <div class="row ipad-width2">
                        <PosterSticky />

                        <div class="col-md-8 col-sm-12 col-xs-12">

				            <div class="movie-single-ct main-content">
                                <IntroDetails />
                                <Rating />

                                <div class="movie-tabs">
						            <div class="tabs">

                                        <TabsLinksDetails 
                                        handleChangeTab={this.handleChangeTab}
                                        tabs={this.state.tabs}
                                        currentTab={this.state.currentTab}/>


                                        <TabContantDetails
                                        currentTab={this.state.currentTab} />
                                        
                                        
                                    </div> 
                                </div>
                    
                            </div> 
                    
                        </div>

                    </div>
                </div>
            </div>
            </Preloader>
        )
     
    }
}

const mapStateToProps = state => {
    return {
        movieDetails : Formatting(state.movieReducer.movieDetails) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetails : (id) => dispatch(movieActions.getMovieDetailsAsync(id))
    }
}


export default connect(null,mapDispatchToProps)(Details) ; 