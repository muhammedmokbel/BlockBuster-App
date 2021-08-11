import React from'react'

import {withFormik} from 'formik'

import {connect} from 'react-redux'

import countrylist from 'iso-3166-country-list'

import * as searchActions from '../../redux/actionGenerators/searchActions'


const SearchForm = (props) => {

	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		releaseYear , 
		mediaType
	  } = props;

	 

	return (
	
    <div class="searh-form">
						<h4 class="sb-title"> {mediaType == "movies" ? "Search for movie" : mediaType == "celebrities" ? "Search for celebrities" :  "Search for series"}</h4>
						<form onSubmit={handleSubmit} class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-12 form-it">
									<label>{mediaType == "movies" ? "Movie name" : mediaType == "celebrities" ? "Celebrity name" : "Series name"}</label>
									<input 
									type="text" 
									placeholder="Enter keywords"
									name="keyWord"
									value={values.keyWord}
									onChange={(e) => {
										if (e.target.value == '')
											props.dispatch(searchActions.searchResults())
										handleChange(e) } } />
									{errors.keyWord && <p style={{margin : "0"}}>{errors.keyWord}</p>}
								</div>
								
								<div class="col-md-12 form-it">
									<label>Region</label>
									
									 <select
									 name="region"
									 onChange={handleChange}
									 value={values.region}>

										 {countrylist
										 .map(item => <option value={item.code}>{item.name}</option> )}
										
									</select>
									
								</div>

								{mediaType != "celebrities" ? <div class="col-md-12 form-it">
									<label>Release Year</label>
									<div class="row">
										<div class="col-md-12">
											<select
											name="releaseYear"
											onChange={handleChange}
											value={values.releaseYear}>
											{releaseYear
											.map(item => <option value={item}>{item}</option>)}
											
											</select>
										</div>
										
									</div>
								</div> : null}
								
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit" />
								</div>
							</div>
						</form>
					</div>
)}

const EnhancedSearchForm =  withFormik({
	mapPropsToValues : () => ({
		keyWord : '' , 
		region : '' , 
		releaseYear : '' , 
	 
	}) , 
	validate: values => {
		const errors = {};
	
		if (!values.keyWord) {
		  errors.keyWord = 'Required';
		}
	
		return errors;
	  },
	handleSubmit : (val , {props}) => props.dispatch(searchActions.searchResultsAsync(val , props.mediaType))
})(SearchForm) 

const mapStateToProps = state => ({
	releaseYear : state.searchReducer.releaseYear , 
	searchResults : state.searchReducer.searchResults
})



export default connect(mapStateToProps)(EnhancedSearchForm) 