import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btn btn-light">
            <a href="/carrito"><img src={"images/cart-shopping-solid.svg"} alt="carrito" width={40} /></a>
            <span className="badge text-bg-danger">{cartTotal()}</span>
        </Link>

    )
}

export default CartWidget;