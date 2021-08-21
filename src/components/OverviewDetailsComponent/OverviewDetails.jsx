import React from 'react'


import MediaItem from '../MediaItemComponent/MediaItem'
import CastItemOverview from '../castItemOverviewComponent/CastItemOverview'
import ReviewItemOverview from '../reviewItemOverviewComponent/ReviewItemOverview'
import SideNavInfoItem from '../sideNavInfoItemComponent/sideNavInfoItem'
import GenreItem from '../genreItemComponent/GenreItem'

const OverviewDetails = () => (
    <div id="overview" class="tab active">
    <div class="row">
        <div class="col-md-8 col-sm-12 col-xs-12">
            <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
            {/* <MediaItem /> */}
            <div class="title-hd-sm">
                <h4>cast</h4>
                <a href="#" class="time">Full Cast & Crew  <i class="ion-ios-arrow-right"></i></a>
            </div>
            <div class="mvcast-item">											
               
                <CastItemOverview />

            </div>
            <div class="title-hd-sm">
                <h4>User reviews</h4>
                <a href="#" class="time">See All 56 Reviews <i class="ion-ios-arrow-right"></i></a>
            </div>
            <ReviewItemOverview/>
            
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12">
            
           <SideNavInfoItem />

           <GenreItem />

            
            {/* <div class="ads">
                <img src="images/uploads/ads1.png" alt="">
            </div> */}
        </div>
    </div>
</div>
)

export default OverviewDetails