import React from 'react'


import TopBarFilter from '../topbarFilterComponent/topbarFilter'

import ReviewItem from '../reviewItemOverviewComponent/ReviewItemOverview'

import Pagination from '../paginationComponent/pagination'

const Review = () => (
    <div id="reviews" class="tab review" style={{display:"block"}}> 
        <div class="row">
            <div style={{marginBottom : "10px"}} class="rv-hd">
                
                <a href="#" class="redbtn">Write Review</a>
            </div>
            <TopBarFilter
            contant="details" />

            <ReviewItem /> 

        
            {/* <Pagination /> */}
        </div>
    </div>

)

export default Review