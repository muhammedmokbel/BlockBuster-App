import React from 'react'

import SlickSlider from "react-slick";

import {dummyImage} from '../../assets/importsAssets'

import SliderItem from '../SliderItemComponent/SliderItem';

import SliderItemAlt from '../SliderItemAltComponent/SliderItemAlt'

const Slider = ({settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
} , children , myRef , myAsNavFor , classes }) => { 

    
    return (
    <div>
    <SlickSlider 
    {...settings}
    ref={myRef}
    asNavFor={myAsNavFor}
    className={classes}>
     {children}
    </SlickSlider>
  </div>
)}

export default Slider

