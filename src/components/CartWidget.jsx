import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            ""
        )
    }

    return (
        <Link to={"/cart"} className="btn btn-light" title="Ir al carrito">
            <a href="/carrito"><img src={"../images/cart-shopping-solid.svg"} alt="carrito" width={40} /></a>
            <span className="badge text-bg-danger">{cartTotal()}</span>
        </Link>

    )
}

export default CartWidget;