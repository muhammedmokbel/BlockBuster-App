import React from 'react'


const MediaItem = () => (
    <div>
        <div class="title-hd-sm">
            <h4>Videos & Photos</h4>
            <a href="#" class="time">All 5 Videos & 245 Photos <i class="ion-ios-arrow-right"></i></a>
        </div>
        <div class="mvsingle-item ov-item">
            <a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src="images/uploads/image1.jpg" alt="" /></a>
            <a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src="images/uploads/image2.jpg" alt="" /></a>
            <a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src="images/uploads/image3.jpg" alt="" /></a>
            <div class="vd-it">
                <img class="vd-img" src="images/uploads/image4.jpg" alt="" />
                <a class="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
            </div>
        </div>
    </div>
)

export default MediaItem; 