import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProducts from "./json/arrayProducts.json";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer =()=>{

    const[item, setItem] = useState({});
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProducts.find(item => item.id === parseInt(id)));
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);
 */
useEffect(()=>{
    const db = getFirestore();
    const documento = doc (db, "Items", "ST1lvO0Vrbmxvd7NWBcw");
    getDoc(documento).then((snapShot) =>{
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()})
        }else{
            console.log ("No se encontró Documento!")
        }
    });


},[]);

    return(
        <div className="container">
        <ItemDetail item={item} />
    </div>
    )
}

export default ItemDetailContainer;