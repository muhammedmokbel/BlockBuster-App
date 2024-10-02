import React from 'react'
import {connect, connectAdvanced} from 'react-redux'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

import * as celebrities from '../../redux/actionGenerators/celebritiesActions'
import * as movies from '../../redux/actionGenerators/moviesActions'
import * as series from '../../redux/actionGenerators/seriesActions'
import {Formatting} from '../../selectors/formatting'

import {mixData} from '../../selectors/mixMoviesSeries'

import PreLoader from '../../components/PreloaderComponent/Preloader'
import Header from '../../components/HeaderComponent/Header'
import Slider from '../../components/SliderComponent/Slider'
import SliderItem from '../../components/SliderItemComponent/SliderItem'
import TabLinks from '../../components/TabLinksComponent/TabLinks'
import TabContant from '../../components/TabContantComponent/TabContant'
import CelebItem from '../../components/celebritiesItemComponent/celebritiesItem'
import SliderItemTrailer from '../../components/SliderItemTrailerComponent/SliderItemTrailer'
import SliderItemDesc from '../../components/SliderItemDescComponent/SliderItemDesc'
import SocialLink from '../../components/SocialLinkComponent/SocialLink'
import Footer from '../../components/FooterComponent/Footer'

class Home extends React.Component {

    state =  {
      isLoading  : true ,
        settings : {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            draggable:true,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]} , 

        tabs : [ 
                {
                    tabID : 'tab1',
                    tabTitle : '#Popular'
                } , 
                {
                    tabID : 'tab2',
                    tabTitle : '#Top rated'
                } , 
                {
                    tabID : 'tab3',
                    tabTitle : '#NOW PLAYING'
                } , 
              
            ], 
            slider1 : {} ,
            slider2 : {} , 
            currentTabOne : 'tab1', 
            currentTabTwo : 'tab1' , 
            currnetTabOneData : this.props.popularMovies, 
            currentTabTwoData : this.props.popularSeries , 
            isPlaying : false  , 
    }

    componentDidMount() {

      Promise.all([this.props.getMovies() ,this.props.getCelebrities() , this.props.getSeries() ])
       .then(res => {
         this.setState({
           isLoading : false ,
           currnetTabOneData : this.props.popularMovies,
           currentTabTwoData : this.props.popularSeries, 
      
         })
       })


    }
    

    

    handleNext = () => {
      this.state.slider1.slickNext()
  }
   handlePrev = () => {
      this.state.slider1.slickPrev()
  }

  handleSlick1 = slider => this.setState({
    slider1 : slider
  }) 

  handleSlick2 = slider => this.setState({
    slider2 : slider
  }) 

  handleChangeTabOne = (tabName) => {
    this.setState({
      currentTabOne : tabName ,
      currnetTabOneData : tabName == 'tab1' ? this.props.popularMovies : 
      tabName == "tab2" ? this.props.topRatedMovies : 
      tabName == 'tab3' ? this.props.nowPlayingMovies : []
    })
  }
  handleChangeTabTwo = (tabName) => {
    this.setState({
      currentTabTwo : tabName ,
      currentTabTwoData : tabName == 'tab1' ? this.props.popularSeries : 
      tabName == "tab2" ? this.props.topRatedSeries : 
      tabName == 'tab3' ? this.props.nowPlayingSeries : []
    })
  }
  // handleSetPlaying = (id) => {

  //   this.setState({
  //     trailersSeries : this.state.trailersSeries.map(item => {
  //       if (item.idPlaying == id)
  //         item.isPlaying = false 
  //       return item 
  //     })
  //   })
  //   // this.setState({
  //   //   isPlaying : !this.state.isPlaying 
  //   // })
  // }
  // handleStart = (id) => {
  //   this.setState({
  //     trailersSeries : this.state.trailersSeries.map(item => {
  //       if (item.idPlaying == id)
  //         item.isPlaying = true 
  //       return item 
  //     })
  //   })
  // }
    
    render() {
        return (
           <PreLoader 
           isloading={this.state.isLoading}>
         

                <div className="slider movie-items">
	<div className="container">
		<div className="row">
		<SocialLink />
	    	<div  class="slick-multiItemSlider">
            <Slider 
            settings={this.state.settings}>

              {this.props.mixData.map(item =>  <SliderItem key={item.id} {...item} />)}
                           
               </Slider>
	
	    </div>
        </div>
        </div>
        </div>


            {/* here start */}
            <div class="movie-items">
	<div class="container">
		<div class="row ipad-width">

			<div class="col-md-8">

				<div class="title-hd">
					<h2>in theater</h2>
					<a href="#" class="viewall">View all <FontAwesomeIcon icon={faChevronRight}/> </a>
				</div>

				<div class="tabs">
					<TabLinks 
            tabs={this.state.tabs}
            currentTab={this.state.currentTabOne}
            handleChangeTab={this.handleChangeTabOne}/>

                    <TabContant 
                    tabs={this.state.tabs}
                    currentTab={this.state.currentTabOne}
                    data={this.state.currnetTabOneData}/>
				    
        </div>
        <div class="title-hd">
					<h2>on tv</h2>
					<a href="#" class="viewall">View all <FontAwesomeIcon icon={faChevronRight}/> </a>
				</div>

        <div class="tabs">
					<TabLinks 
          handleChangeTab={this.handleChangeTabTwo}
          currentTab={this.state.currentTabTwo}
              tabs={this.state.tabs}/>

                    <TabContant 
                    tabs={this.state.tabs}
                    currentTab={this.state.currentTabTwo}
                    data={this.state.currentTabTwoData}/>
				    
        </div>

            </div>

            <div class="col-md-4">
				<div class="sidebar">
					<div class="ads">
						<img src="images/uploads/ads1.png" alt="" width="336" height="296" />
					</div>
					<div class="celebrities">
						<h4 class="sb-title">Spotlight Celebrities</h4>

            {this.props.trendPerson.slice(0,5).map(item => <CelebItem key={item.id}  {...item}/>)}
        
						
					
						<a href="#" class="btn">See all celebrities<FontAwesomeIcon icon={faChevronRight}/></a>
					</div>
				</div>
			</div>
				
		</div>
        </div>
        </div>


            {/* here end  */}

            {/* start trailers here */}

            <div class="trailers">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-12">
				<div class="title-hd">
					<h2>in theater</h2>
					<a href="#" class="viewall">View all <FontAwesomeIcon icon={faChevronRight}/></a>
				</div>
				<div class="videos">
				 	<div class="slider-for-2 video-ft">

             <Slider
             settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
             }}
             myRef={this.handleSlick1}
             myAsNavFor={this.state.slider2}>

               {this.props.trailersSeries.length && this.props.trailersSeries.map((item, index) =>{

                 console.log(item)
               
                 return (
                  <SliderItemTrailer 
                  key={item.id} 
                  id={item.key} />
                 )
               })}
                
          
          



             </Slider>
				 	
						
					</div>
					<div class="slider-nav-2 thumb-ft overflowHidden">
    
            <Slider 
            settings={
              {
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for-2',
                dots: false,
                arrows: false,
                // centerMode: true,
                focusOnSelect: true,
                vertical: true,
                draggable : true 
                // autoplay: true,
                // autoplaySpeed: 2000
                // infinite : false
                

              }
            }
            myRef={this.handleSlick2 }
            myAsNavFor={this.state.slider1}>

              {this.props.trendSeries.slice(0,5).map((item , index) =>{
               

                return (
                  <SliderItemDesc key={index} {...item} />
                )

              })}

             
              

            </Slider>

          
					
					</div>
				</div>   
			</div>
		</div>
	</div>
</div>

            {/* end trailers here */}


</PreLoader>
        )
    }

}

const mapStateToProps = state => {
  console.log(state)
  console.log("here")
  return {
    trendMovies : Formatting(state.moviesReducer.trendMovies) , 
    trendSeries : Formatting(state.seriesReducer.trendSeries) , 
    trendPerson : Formatting(state.celebritiesReducer.trendPerson) , 
    mixData : mixData(state.moviesReducer.trendMovies, state.seriesReducer.trendSeries), 
    popularMovies : Formatting(state.moviesReducer.popular), 
    topRatedMovies : Formatting(state.moviesReducer.topRated),
    nowPlayingMovies : Formatting(state.moviesReducer.nowPlaying), 
    popularSeries : Formatting(state.seriesReducer.popular), 
    topRatedSeries : Formatting(state.seriesReducer.topRated),
    nowPlayingSeries : Formatting(state.seriesReducer.nowPlaying), 
    trailersSeries : state.seriesReducer.trailers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCelebrities : () => dispatch(celebrities.getCelebritiesAsync()) ,
    getMovies : () => dispatch(movies.getMoviesAsync()) , 
    getSeries : () => dispatch(series.getSeriesAsync())
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)