import React, { useState, useEffect } from "react";

const ItemCount = ({ stockItems }) => {

    const [clicks, setClicks] = useState(1);
    const [stock, setStock] = useState(stockItems);

    useEffect(() => {
        setStock(stockItems)

    }, [stockItems])

    /* Función para incrementar contador */
    const agregarProducto = () => {
        setClicks(clicks + 1);
    };
    /* Función para decrementar el contador */
    const sacarProducto = () => {
        setClicks(clicks - 1);
    };
    /* Función para agregar productos al carrito y no sobrepasar el stock disponible */
    const onAdd = () => {
        if (clicks <= stock) {
            console.log("Agregaste " + clicks + " productos al carro")
            setStock(stock - clicks);
            setClicks(1);
        }
    }


    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <button type="button" className="decrement" disabled={clicks <= 1} onClick={sacarProducto}>-</button>
                    <button type="button" className="value">{clicks} </button>
                    <button type="button" className="increment" disabled={clicks >= stock} onClick={agregarProducto}>+</button>
                    <div>
                        <button type="button" className="btn btn-danger btn-sm mx-4" disabled={stock <= 0} onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;