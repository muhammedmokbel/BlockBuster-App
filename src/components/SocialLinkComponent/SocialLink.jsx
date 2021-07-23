import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookF , faTwitter , faGooglePlus , faYoutube} from '@fortawesome/free-brands-svg-icons'


const SocialLink = () => (
    <div className="social-link">
    <p>Follow us: </p>
    <a href="#"><FontAwesomeIcon icon={faFacebookF} style={{color : "white" , marginRight : "10px"}} /> </a>
    <a href="#"><FontAwesomeIcon icon={faTwitter} style={{color : "white" , marginRight : "10px"}} /></a>
    <a href="#"><FontAwesomeIcon icon={faGooglePlus} style={{color : "white" , marginRight : "10px"}} /></a>
    <a href="#"><FontAwesomeIcon icon={faYoutube} style={{color : "white" , marginRight : "10px"}} /></a>
</div>
)

export default SocialLink