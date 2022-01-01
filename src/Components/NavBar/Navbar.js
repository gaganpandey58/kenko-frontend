import React from 'react';

import './Navbar.css';
import SearchBar from '../SearchBar/Searchbar';
import AccountLogin from '../AccountLogin/AccountLogin';
function Navbar() {
    return ( 
        <div className="bar">
            <div className="logo">
                <text className="logo-text">kenko</text>
            </div>
         
            <SearchBar placeholder="Search" />
            <div><AccountLogin/></div>
        </div>
     );
}

export default Navbar;