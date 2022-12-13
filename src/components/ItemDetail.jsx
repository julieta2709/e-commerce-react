import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
     return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.pictureUrl} className="img-fluid" alt={item.title} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
                <ItemCount stockItems={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;