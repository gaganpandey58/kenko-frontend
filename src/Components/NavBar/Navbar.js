import React from 'react';

import './Navbar.css';
import SearchBar from '../SearchBar/Searchbar';
function Navbar() {
    return ( 
        <div className="bar">
            <div className="logo">
                <text className="logo-text">kenko</text>
            </div>
            <label className="text-label" >Health App</label>
            <SearchBar placeholder="Search" />
        </div>
     );
}

export default Navbar;