import React from "react";
import Logo from "./logo/Logo";
import classes from "./Header.module.scss";
import SearchBar from "./searchBar/SearchBar";

const Header = function (){
    return (
        <div className={classes.header}>
            <Logo />
            <SearchBar/>
        </div>
    );
}

export default Header;