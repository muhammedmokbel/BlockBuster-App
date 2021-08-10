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

		
		if (this.props.match.params.version == "movies")
		{
			this.props.getMovies()
			.then(res => {
				
				this.setState({
					isloading : false 
				})
			})
		}
		else if (this.props.match.params.version == "tv")
		{
			this.props.getSeries()
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
                                <h1>{this.props.match.params.version=="tv" ? "series listing - list" :" movie listing - list"} </h1>
                                <BreadCumb
								mediaType={this.props.match.params.version} />
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

				{this.props.match.params.version == "movies" ?
				!this.props.searchResults.length &&
				  this.props.view == "list" && this.props.trendMovies
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieListItem key={item.id} {...item} />)
				: this.props.match.params.version == "tv" ? 
				!this.props.searchResults.length &&
				  this.props.view == "list" && this.props.trendSeries
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieListItem key={item.id} {...item} />) : null}

				

				{this.props.searchResults.length &&
				this.props.view == "list" &&
				this.props.searchResults
				.map(item => <MovieListItem key={item.id} {...item} />)}

				{this.props.view == "grid" ? 
				<div class="flex-wrap-movielist">
					
						{this.props.match.params.version == "movies"  ?
						!this.props.searchResults.length && this.props.trendMovies
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieGridItem key={item.id} {...item} />) : 
				this.props.match.params.version == "tv" ? 
				!this.props.searchResults.length && this.props.trendSeries
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieGridItem key={item.id} {...item} />) : null
			}

{this.props.searchResults.length && this.props.searchResults
				.map(item => <MovieGridItem key={item.id} {...item} />)}
					
					 </div> : null
					 }

					 

					 

					 



				
		{!this.props.searchResults.length  && <Pagination 
				media_type={this.props.match.params.version}
				pageNumbers={this.props.moviesPaginationNumbers}
				currentPage={this.props.currentPage}
				changePagination={this.props.changePagination}
				changeItemPerPage={this.props.changeItemPerPage}
				numberMoviesToShow={this.props.numberMoviesToShow}
				currentPageTenMode={this.props.currentPageTenMode} /> }

				
            </div>
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="sidebar">
					<SearchForm />
					<div class="ads">
						<img src="images/uploads/ads1.png" alt="" />
					</div>

					

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
	  trendSeries : sortByItems(Formatting(state.seriesReducer.trendSeries) , state.topBarFilterReducer)  , 
	  trendPerson : Formatting(state.celebritiesReducer.trendPerson) , 
	  moviesPaginationNumbers : state.paginationReducer.moviesPaginationNumbers , 
	  currentPage : state.paginationReducer.currentPage,
	  startPoint : state.paginationReducer.startPoint , 
	  endPoint : state.paginationReducer.endPoint , 
	  numberMoviesToShow : state.paginationReducer.numberMoviesToShow  ,
	  currentPageTenMode : state.paginationReducer.currentPageTenMode , 
	  view : state.topBarFilterReducer.view , 
	  searchResults : sortByItems(Formatting(state.searchReducer.searchResults) , state.topBarFilterReducer ) 
	  
	}
  }
  
  const mapDispatchToProps = (dispatch , props) => {
	
	return {
	  getCelebrities : () => dispatch(celebrities.getCelebritiesAsync()) ,
	  getMovies : () => dispatch(movies.getMoviesAsync()) , 
	  getSeries : () => dispatch(series.getSeriesAsync()) , 
	  changePagination : (newPage , showPage , currentPage , mediaType) =>{
		 
		  if (showPage == '20' || (showPage == "10" &&  ( Math.floor((newPage + 1 ) / 2)) != currentPage ))
		  {
			
			dispatch(pagination.changeCurrentPaginationAsync(newPage , mediaType , showPage))
		  }
			
		  else 
		  	dispatch(pagination.changeItemRange(newPage))
	
	  }  ,
	  changeItemPerPage : (val , currentPage) => dispatch(pagination.changeItemPerPage(val , currentPage))
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Collection)