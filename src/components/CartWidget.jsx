import React from "react";

const CartWidget = () => {


    return (
        <button type="button" className="btn btn-light">
            <a href="/carrito"><img src={"images/cart-shopping-solid.svg"} alt="carrito" width={40} /></a>
            <span className="badge text-bg-danger">4</span>
        </button>

    )
}

export default CartWidget;