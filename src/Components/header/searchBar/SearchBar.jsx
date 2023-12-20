import React from "react";
import './SearchBar.css'; 


const SearchBar = function () {
    return (
        <form role="search" className="container">
            <input type="search" placeholder="Search" className="searchBar"/>
            <input type="submit" value="Search" className="searchBtn"/>
        </form>
    );
}

export default SearchBar;

