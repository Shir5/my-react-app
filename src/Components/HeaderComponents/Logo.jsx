import React from "react";
import classes from "./Logo.module.scss";

const Logo = function (){
    return (
        <div>
            <img src="Resources/EazyBox_Logo.svg" alt="Logo" className={classes.logo}/>
        </div>
    );
}

export default Logo;