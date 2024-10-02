import React from 'react'


import TopbarFilter from '../topbarFilterComponent/topbarFilter'

import MovieItem from '../movieListItemComponent/movieListItem'

const RelatedTab = () => (
    <div id="moviesrelated" class="tab" style={{display :'block'}}>
					       	 		<div class="row">
					       	 			<h3>Related Movies To</h3>
					       	 			<h2>Skyfall: Quantum of Spectre</h2>
					       	 		
									<TopbarFilter 
                                    contant='details'/>

                                        <MovieItem />
                                        <MovieItem />

										
										<div class="topbar-filter">
											<label>Movies per page:</label>
											<select>
												<option value="range">5 Movies</option>
												<option value="saab">10 Movies</option>
											</select>
											<div class="pagination2">
												<span>Page 1 of 2:</span>
												<a class="active" href="#">1</a>
												<a href="#">2</a>
												<a href="#"><i class="ion-arrow-right-b"></i></a>
											</div>
										</div>
					       	 		</div>
					       	 	</div>
)

export default RelatedTab 