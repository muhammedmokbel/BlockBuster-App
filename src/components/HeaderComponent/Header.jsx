import React from 'react'

import NavBar from '../NavBarComponent/NavBar'
import TopSearch from '../TopSearchComponent/TopSearch'

const Header  = () => (
    <header className="ht-header">
        <div className="container">
            <NavBar /> 

            <TopSearch />

        </div>
    </header>

)

export default Header