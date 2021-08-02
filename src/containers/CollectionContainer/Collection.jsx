import React from 'react'
import {connect} from 'react-redux'


import * as celebrities from '../../redux/actionGenerators/celebritiesActions'
import * as movies from '../../redux/actionGenerators/moviesActions'
import * as series from '../../redux/actionGenerators/seriesActions'
import * as pagination from '../../redux/actionGenerators/paginationActions'
import {Formatting} from '../../selectors/formatting'
import {sortByItems} from '../../selectors/sortingItems'

import PreLoader from '../../components/PreloaderComponent/Preloader'
import BreadCumb from '../../components/breadcumbComponent/breadcumb'
import TopBarFilter from '../../components/topbarFilterComponent/topbarFilter'
import MovieListItem from '../../components/movieListItemComponent/movieListItem'
import MovieGridItem from '../../components/movieGridItemComponent/movieGridItem'
import Pagination from '../../components/paginationComponent/pagination'
import SearchForm from '../../components/searchFormComponent/searchForm'



class Collection extends React.Component 
{
    state = {
		isloading : true 
    }

	componentDidMount() {

		console.log(this.props.moviesPaginationNumbers)
		
		if (this.props.match.params.version)
		{
			this.props.getMovies()
			.then(res => {
				
				this.setState({
					isloading : false 
				})
			})
		}
	}
    
    render(){
        return (
            <PreLoader
            isloading={this.state.isloading}>
            <div class="hero common-hero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hero-ct">
                                <h1> movie listing - list</h1>
                                <BreadCumb />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-single movie_list">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-8 col-sm-12 col-xs-12">
				<TopBarFilter />

				{this.props.view == "list" && this.props.trendMovies
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieListItem key={item.id} {...item} />)}

				{this.props.view == "grid" ? 
				<div class="flex-wrap-movielist">
					
						{this.props.trendMovies
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieGridItem key={item.id} {...item} />)}
					
					 </div> : null
					 }



				
		

				<Pagination 
				pageNumbers={this.props.moviesPaginationNumbers}
				currentPage={this.props.currentPage}
				changePagination={this.props.changePagination}
				changeItemPerPage={this.props.changeItemPerPage}
				numberMoviesToShow={this.props.numberMoviesToShow}
				currentPageTenMode={this.props.currentPageTenMode} />
            </div>
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="sidebar">
					<SearchForm />
					<div class="ads">
						<img src="images/uploads/ads1.png" alt="" />
					</div>

					{/* <div class="sb-facebook sb-it">
						<h4 class="sb-title">Find us on Facebook</h4>
						<iframe src="" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315" style="width:100%;border:none;overflow:hidden" ></iframe>
					</div> */}

					{/* <div class="sb-twitter sb-it">
						<h4 class="sb-title">Tweet to us</h4>
						<div class="slick-tw">
							<div class="tweet item" id="599202861751410688">
							</div>
							<div class="tweet item" id="297462728598122498">
							</div>
						</div>							
					</div> */}

				</div>
                
			</div>
		</div>
   
	</div>
</div>
            </PreLoader>

        )
    }
}

const mapStateToProps = state => {
	console.log(state)

	return {
	  trendMovies : sortByItems(Formatting(state.moviesReducer.trendMovies) , state.topBarFilterReducer)  , 
	  trendSeries : Formatting(state.seriesReducer.trendSeries) , 
	  trendPerson : Formatting(state.celebritiesReducer.trendPerson) , 
	  popularMovies : Formatting(state.moviesReducer.popular), 
	  topRatedMovies : Formatting(state.moviesReducer.topRated),
	  nowPlayingMovies : Formatting(state.moviesReducer.nowPlaying), 
	  popularSeries : Formatting(state.seriesReducer.popular), 
	  topRatedSeries : Formatting(state.seriesReducer.topRated),
	  nowPlayingSeries : Formatting(state.seriesReducer.nowPlaying), 
	  moviesPaginationNumbers : state.paginationReducer.moviesPaginationNumbers , 
	  currentPage : state.paginationReducer.currentPage,
	  startPoint : state.paginationReducer.startPoint , 
	  endPoint : state.paginationReducer.endPoint , 
	  numberMoviesToShow : state.paginationReducer.numberMoviesToShow  ,
	  currentPageTenMode : state.paginationReducer.currentPageTenMode , 
	  view : state.topBarFilterReducer.view
	  
	}
  }
  
  const mapDispatchToProps = (dispatch , props) => {
	
	return {
	  getCelebrities : () => dispatch(celebrities.getCelebritiesAsync()) ,
	  getMovies : () => dispatch(movies.getMoviesAsync()) , 
	  getSeries : () => dispatch(series.getSeriesAsync()) , 
	  changePagination : (newPage , showPage , currentPage) =>{
		  if (showPage == '20' || (showPage == "10" &&  ( Math.floor((newPage + 1 ) / 2)) != currentPage ))
			dispatch(pagination.changeCurrentPaginationAsync(newPage , 'trend' , showPage))
		  else 
		  	dispatch(pagination.changeItemRange(newPage))
	
	  }  ,
	  changeItemPerPage : (val , currentPage) => dispatch(pagination.changeItemPerPage(val , currentPage))
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Collection)