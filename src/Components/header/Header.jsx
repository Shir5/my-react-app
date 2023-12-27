import React from "react";
import Logo from "./logo/Logo";
import classes from "./Header.module.scss";
import SearchBar from "./searchBar/SearchBar";
import ThemeChanger from "./themeChanger/ThemeChanger";
import Cart from "./cart/Cart";

const Header = function (){
    return (
        <div className={classes.header}>
            <Logo />
            <SearchBar/>
            <ThemeChanger />
            <Cart />
        </div>
    );
}

export default Header;