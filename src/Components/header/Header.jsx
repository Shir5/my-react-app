import React from "react";
import Logo from "./logo/Logo";
import classes from "./Header.module.scss";
import SearchBar from "./searchBar/SearchBar";
import ThemeChanger from "./themeChanger/ThemeChanger";

const Header = function (){
    return (
        <div className={classes.header}>
            <Logo />
            <SearchBar/>
            <ThemeChanger />
        </div>
    );
}

export default Header;