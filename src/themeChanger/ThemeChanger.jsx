import React, { useState } from "react";
import "./ThemeChangerStyles.scss";

const ThemeChanger = function () {
    const [themeSrc, setThemeSrc] = useState("/Resources/icons8-moon-30.svg");
    const htmlElement = document.querySelector('html');

    function changeTheme() {
        if (themeSrc === "/Resources/icons8-moon-30.svg") {
            setThemeSrc("/Resources/icons8-sun.svg");
            htmlElement.setAttribute('data-theme', 'light');
        } else {
            setThemeSrc("/Resources/icons8-moon-30.svg");
            htmlElement.setAttribute('data-theme', 'dark');
        }
    }

    return (  
        <div>
            <button className="themeButton" onClick={changeTheme}>
                <img src={themeSrc} alt="Logo" className="themeImage" />
            </button>
        </div>
    );
}

export default ThemeChanger;
