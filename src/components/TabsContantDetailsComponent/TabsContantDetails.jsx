import React from 'react'

import OverviewDetails from '../OverviewDetailsComponent/OverviewDetails'
import Review from '../ReviewComponent/Review';
import CastTab from '../CastTabComponent/castTab'
import RelatedTab from '../RelatedTabComponent/RelatedTab';


const TabContantDetails = ({currentTab}) => (
    <div class="tab-content">
        {currentTab == "Overview" ? 
          <OverviewDetails /> : currentTab == "Reviews" ?  <Review /> : 
          currentTab == 'Cast & Crew' ? <CastTab /> : 
          currentTab == 'Related Movies' ?  <RelatedTab /> : 
          null}
      
    </div>
)

export default TabContantDetails; 