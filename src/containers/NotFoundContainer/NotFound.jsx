import React from 'react'

import {Link} from 'react-router-dom'

import {Logo , errorImage} from '../../assets/importsAssets'


class NotFound extends React.Component {
    state = {

    }

    render() {
        return (
            <div class="page-single-2">
                <div class="container">
                    <div class="row">
                        <div class="middle-content">
                            <a href="index.html"><img class="md-logo" src={Logo} alt="" /></a>
                            <img src={errorImage} alt="" />
                            <h1>Page not found</h1>
                            <Link to="/" className="redbtn">go home</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound