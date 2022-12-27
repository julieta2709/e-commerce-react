import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {

    const [clicks, setClicks] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    /* Función para incrementar contador */
    const agregarProducto = () => {
        setClicks(clicks + 1);
    };
    /* Función para decrementar el contador */
    const sacarProducto = () => {
        setClicks(clicks - 1);
    };
    /* Función para agregar productos al carrito y no sobrepasar el stock disponible */
    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setClicks(1);
        setVendido(true);
        onAdd(quantity);
    }
    useEffect(() => {
        setItemStock(stock)

    }, [stock])


    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <button type="button" className="decrement" disabled={clicks <= 1} onClick={sacarProducto}>-</button>
                    <button type="button" className="value">{clicks} </button>
                    <button type="button" className="increment" disabled={clicks >= itemStock} onClick={agregarProducto}>+</button>
                    <div>
                        {vendido ? <Link to={"/cart"} className="btn btn-danger btn-sm mx-4">Finalizar compra</Link> : <button type="button" className="btn btn-danger btn-sm mx-4" disabled={stock <= 0} onClick={() => { addToCart(clicks) }}>Agregar al carrito</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;