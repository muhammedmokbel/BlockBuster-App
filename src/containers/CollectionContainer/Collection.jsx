import React from 'react'
import {Redirect} from 'react-router-dom'
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
import CelebrityItemList from '../../components/celebrityItemComponent/celebrityItem'
import CelebrityItemGrid from '../../components/CelebrityItemGridComponent/CelebrityItemGrid'
import Pagination from '../../components/paginationComponent/pagination'
import SearchForm from '../../components/searchFormComponent/searchForm'



class Collection extends React.Component 
{
    state = {
		isloading : true , 
		version : null 
    }

	componentDidUpdate(){
		console.log(this.props.match.params.version)
		if (this.state.version != this.props.match.params.version)
		{
			
			this.setState({
				version : this.props.match.params.version
			})

			this.props.changePagination(1 , 20 , null , this.props.match.params.version)

		}
	}

	componentDidMount() {

	

		
		if (this.props.match.params.version == "movies")
		{
			this.props.getMovies()
			.then(res => {
				
				this.setState({
					isloading : false , 
					version : this.props.match.params.version
				})
			})
		}
		else if (this.props.match.params.version == "tv")
		{
			this.props.getSeries()
			.then(res => {
				this.setState({
					isloading : false , 
					version : this.props.match.params.version
				})
			})
		}
		else if (this.props.match.params.version == "celebrities")
		{
			this.props.getCelebrities()
			.then(res => {
				this.setState({
					isloading : false , 
					version : this.props.match.params.version
				})
			})
		}
		else 
			this.props.history.push('/notFound')

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
                                <h1>{this.props.match.params.version=="tv" ? "series listing " : this.props.match.params.version == "celebrities" ? "celebrities listing " : "movie listing "} </h1>
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
			<div className={this.props.match.params.version == "celebrities" && this.props.view == "grid" ? "col-md-9 col-sm-12 col-xs-12" : "col-md-8 col-sm-12 col-xs-12"}>
				<TopBarFilter 
				mediaType={this.props.match.params.version}/>

				{this.props.match.params.version == "movies" ?
				!this.props.searchResults.length &&
				  this.props.view == "list" && this.props.trendMovies
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieListItem key={item.id} {...item} />)
				: this.props.match.params.version == "tv" ? 
				!this.props.searchResults.length &&
				  this.props.view == "list" && this.props.trendSeries
				.slice(this.props.startPoint , this.props.endPoint)
				.map(item => <MovieListItem key={item.id} {...item} />) 
				: this.props.match.params.version == "celebrities" ? 
				!this.props.searchResults.length &&
				this.props.view == "list" && this.props.trendPerson
			  .slice(this.props.startPoint , this.props.endPoint)
			  .map(item => <CelebrityItemList key={item.id} {...item} />)  : null  }



				{this.props.match.params.version == "movies" || this.props.match.params.version == "tv" ?
				this.props.searchResults.length &&
				this.props.view == "list" &&
				this.props.searchResults
				.map(item => <MovieListItem key={item.id} {...item} />) : null}

		{this.props.match.params.version == "celebrities"  ?
				this.props.searchResults.length &&
				this.props.view == "list" &&
				this.props.searchResults
				.map(item => <CelebrityItemList key={item.id} {...item} />) : null}	

				{this.props.view == "grid" && this.props.match.params.version != "celebrities"? 
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

					 {this.props.view == "grid" && this.props.match.params.version == "celebrities"?
						<div class="celebrity-items">
							
					{!this.props.searchResults.length ? this.props.trendPerson
					.slice(this.props.startPoint , this.props.endPoint)
					.map(item => <CelebrityItemGrid key={item.id} {...item} />) 

					: this.props.searchResults.length && this.props.searchResults
					.map(item => <CelebrityItemGrid key={item.id} {...item} />)}

					</div> : null}


					 

					 

					 



				
		{!this.props.searchResults.length  && <Pagination 
				media_type={this.props.match.params.version}
				pageNumbers={this.props.moviesPaginationNumbers}
				currentPage={this.props.currentPage}
				changePagination={this.props.changePagination}
				changeItemPerPage={this.props.changeItemPerPage}
				numberMoviesToShow={this.props.numberMoviesToShow}
				currentPageTenMode={this.props.currentPageTenMode} /> }

				
            </div>
			<div className={this.props.match.params.version == "celebrities" && this.props.view == "grid" ? "col-md-3 col-sm-12 col-xs-12" : "col-md-4 col-sm-12 col-xs-12"}>
				<div class="sidebar">
					<SearchForm 
					mediaType={this.props.match.params.version}/>
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
	  trendPerson : sortByItems(Formatting(state.celebritiesReducer.trendPerson) , state.topBarFilterReducer)  , 
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