import React from 'react' ;

import Slider from '../SliderComponent/Slider';
import SliderItemAlt from '../SliderItemAltComponent/SliderItemAlt'

const TabContant = ({tabs , currentTab , data}) => (
    
    <div class="tab-content">
         <div id={currentTab} className={"tab active"}>
                <div class="row">
                    <div class="slick-multiItem">
                    
                    
                    <Slider 
                    settings={{
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                        draggable:true,
                        // autoplay: true,
                        // autoplaySpeed: 2000,
                        dots: true,
                        responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    }}> 

                    {data && data.map(item => <SliderItemAlt {...item} key={item.id}/> )}

                    

                    
                    
                    </Slider>


                    </div>
                </div>
            </div>



    </div>
)

export default TabContant