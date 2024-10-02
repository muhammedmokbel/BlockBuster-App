import React from 'react'


const TabsLinksDetails = ({handleChangeTab , tabs, currentTab}) => (
    <ul class="tab-links tabs-mv">
        {tabs.map(item => 
        <li 
        key={item.tabName} 
        class={currentTab == item.tabName ? "active" : ""}
        onClick={() => handleChangeTab(item.tabName)}> <a> {item.tabName} </a> </li>)}
                              
    </ul>
)

export default TabsLinksDetails ; 