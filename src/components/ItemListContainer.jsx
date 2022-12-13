import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProducts from "./json/arrayProducts.json";



const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.categoria === id) : arrayProducts);
            }, 2000)
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )

}

export default ItemListContainer;