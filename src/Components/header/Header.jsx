import React from "react";
import Logo from "./logo/Logo";
import classes from "./Header.module.scss";

const Header = function (){
    return (
        <div className={classes.header}>
            <Logo />
        </div>
    );
}

export default Header;