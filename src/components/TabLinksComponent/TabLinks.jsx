import React from 'react'


const TabLinks = ({tabs , currentTab , handleChangeTab}) => (
    
    
    <ul class="tab-links">
        {tabs.map(item => (
              <li 
              key={item.tabID}
              className={item.tabID === currentTab ? "active" : ""}
              onClick={() => handleChangeTab(item.tabID)}>
                  <a style={{cursor :"pointer"}}> {item.tabTitle} </a>
              </li>
            )
        )}
                       
	</ul>
)

export default TabLinks