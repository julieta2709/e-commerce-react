import React, { useState, useEffect } from "react";

const ItemCount = ({ stockItems }) => {

    const [clicks, setClicks] = useState(1);
    const [stock, setStock] = useState(stockItems);

    useEffect(()=>{
        setStock(stockItems)
 
     },[stockItems])

    const agregarProducto = () => {
        setClicks(clicks + 1);
    };

    const sacarProducto = () => {
        setClicks(clicks - 1);
    };

    const onAdd = () => {
        if (clicks <= stock) {
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