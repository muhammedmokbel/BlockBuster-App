import React from 'react'

import {dummyImage} from '../../assets/importsAssets'

import {Star} from 'react-ionicons'

import moment from 'moment'



import ShowMoreText from "react-show-more-text";


const ReviewItemOverview = ({content , author , created_at}) => (

    <div>

  
            <div class="mv-user-review-item">
                <h3>{author}</h3>
                {/* <div class="no-star">
                <Star color={'gold'} width="20px" height="20px" style={{marginRight : "5px"}} />
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star last"></i>
                </div> */}
                <p class="time">
                    {moment(created_at).format('D MMMM Y')} by <a href="#"> {author}</a>
                </p>
                <p>

                    {<ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                    >
                        {content}
                        </ShowMoreText>}
            
                 
                </p>
            </div>

            </div>
    
)

export default ReviewItemOverview; 