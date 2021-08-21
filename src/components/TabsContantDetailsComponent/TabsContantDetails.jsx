import React from 'react'

import OverviewDetails from '../OverviewDetailsComponent/OverviewDetails'
import Review from '../ReviewComponent/Review';


const TabContantDetails = ({currentTab}) => (
    <div class="tab-content">
        {currentTab == "Overview" ? 
          <OverviewDetails /> : currentTab == "Reviews" ?  <Review /> : null}
      
    </div>
)

export default TabContantDetails; 