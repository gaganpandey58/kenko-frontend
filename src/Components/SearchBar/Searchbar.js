import React from 'react';

import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
function SearchBar( {placeholder} ) {
    return ( 
        <div className="box">
            <div className="searchInputs">
                <div className="searchIcon"><SearchIcon /></div>
                <input type="text" className="inputField" placeholder={placeholder} />
            </div>
        </div>
     );
}

export default SearchBar;