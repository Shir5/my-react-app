import React from "react";
import classes from "./CartStyles.module.scss";
const Cart = function () {
    return ( 
        <React.Fragment>
            <button className={classes.cartButton}>
                <img src="/Resources/shopping-cart-svgrepo-com.svg">
                </img>
            </button>
        </React.Fragment>
    );
}

export default Cart;