import React from 'react'
import {Logo} from '../../assets/importsAssets'

import {Link} from 'react-router-dom'


const NavBar = () => (
    <nav class="navbar navbar-default navbar-custom">

    {/* <!-- Brand and toggle get grouped for better mobile display --> */}

    <div class="navbar-header logo">
        <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <a href="index.html"><img class="logo" src={Logo} alt="" width="119" height="58" /></a>
    </div>

    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav flex-child-menu menu-left">
            <li class="hidden">
                <a href="#page-top"></a>
            </li>
            <li class="dropdown first">
                <Link to="/" className="btn btn-default dropdown-toggle lv1"> Home </Link>
            </li>
            <li class="dropdown first">
            <Link to="/collection/movies" className="btn btn-default dropdown-toggle lv1"> Movies </Link>
               
            </li>
            <li class="dropdown first">
            <Link to="/collection/tv" className="btn btn-default dropdown-toggle lv1"> Series </Link>
             
            </li>
            <li class="dropdown first">
            <Link to="/collection/celebrities" className="btn btn-default dropdown-toggle lv1"> Celebrities </Link>
             
            </li>
            <li class="dropdown first">
                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                community <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu level1">
                    <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                    <li><a href="userfavoritelist.html">user favorite list</a></li>
                    <li><a href="userprofile.html">user profile</a></li>
                    <li class="it-last"><a href="userrate.html">user rate</a></li>
                </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav flex-child-menu menu-right">
            <li class="dropdown first">
                <a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                pages <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu level1">
                    <li><a href="landing.html">Landing</a></li>
                    <li><a href="404.html">404 Page</a></li>
                    <li class="it-last"><a href="comingsoon.html">Coming soon</a></li>
                </ul>
            </li>                
            <li><a href="#">Help</a></li>
            <li class="loginLink"><a href="#">LOG In</a></li>
            <li class="btn signupLink"><a href="#">sign up</a></li>
        </ul>
    </div>
{/* <!-- /.navbar-collapse --> */}
</nav>
)

export default NavBar