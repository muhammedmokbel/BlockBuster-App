import React from 'react'

import {ChevronForward} from 'react-ionicons'

const Pagination = ({pageNumbers , currentPageTenMode , media_type , numberMoviesToShow , currentPage , changeItemPerPage , changePagination}) => (
    <div class="topbar-filter">
        <label>Movies per page:</label>
        <select
        onChange={e => changeItemPerPage(e.target.value ,currentPage )}
        >
            <option value="10">10 {media_type}</option>
            <option selected value="20">20 {media_type}</option>
        </select>
        <div class="pagination2">
            <span>Page 1 of {pageNumbers.length}:</span>

            {numberMoviesToShow == "20" && pageNumbers.slice(currentPage == 1  ? currentPage - 1 : currentPage - 2  , currentPage + 2).map(item  =>  
            <a 
            onClick={() => changePagination(item + 1 , numberMoviesToShow , currentPage , media_type)}  
            className={currentPage == item + 1 ? "active" : ""} 
            href="#">{item + 1}</a>
            )}

            {numberMoviesToShow == "10" && pageNumbers.slice(currentPageTenMode == 1  ? currentPageTenMode - 1 : currentPageTenMode - 2  , currentPageTenMode + 2).map(item  =>  
            <a 
            onClick={() => changePagination(item + 1 , numberMoviesToShow , currentPage, media_type)}  
            className={currentPageTenMode == item + 1 ? "active" : ""} 
            href="#">{item + 1}</a>
            )}   


         

            {numberMoviesToShow == "20" && currentPage != 16 && currentPage != 17 && currentPage != 18 && currentPage != 19 && currentPage !=20 ? "..." : null }

            
            {numberMoviesToShow == "10" && currentPageTenMode != 36 && currentPageTenMode != 37 && currentPageTenMode != 38 && currentPageTenMode != 39 && currentPageTenMode !=40 ? "..." : null }
          
          

            {numberMoviesToShow == "20" && currentPage != pageNumbers.length - 3  && currentPage != pageNumbers.length - 2 && currentPage != pageNumbers.length - 1 && currentPage !=pageNumbers.length ?  pageNumbers
            .slice(pageNumbers.length - 2, pageNumbers.length + 1)
            .map(item  =>  
            <a 
            className={currentPage == item + 1 ? "active" : ""}
            onClick={() => changePagination(item + 1, numberMoviesToShow , currentPage, media_type)}  
            href="#">{item + 1}</a>
            ) : null}

{numberMoviesToShow == "10" && currentPageTenMode != pageNumbers.length - 3  && currentPageTenMode != pageNumbers.length - 2 && currentPageTenMode != pageNumbers.length - 1 && currentPageTenMode !=pageNumbers.length ?  pageNumbers
            .slice(pageNumbers.length - 2, pageNumbers.length + 1)
            .map(item  =>  
            <a 
            className={currentPageTenMode == item + 1 ? "active" : ""} 
            onClick={() => changePagination(item + 1, numberMoviesToShow , currentPage, media_type)}  
            href="#">{item + 1}</a>
            ) : null}
         
            <a href="#"><ChevronForward onClick={() => changePagination(currentPage + 1,numberMoviesToShow , currentPage, media_type)}    width="17px" height="17px" style={{paddingTop : '3px'}} color="white" /></a>
        </div>
    </div>
)

export default Pagination