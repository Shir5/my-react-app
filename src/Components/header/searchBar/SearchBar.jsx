import React from "react";
import './SearchBar.scss'; 


const SearchBar = function () {
    return (
        <form role="search" className="group">
            <input type="search" placeholder="Search" className="searchBar"/>
            <input type="submit" value="Search" className="searchBtn"/>
        </form>
    );
}

export default SearchBar;

