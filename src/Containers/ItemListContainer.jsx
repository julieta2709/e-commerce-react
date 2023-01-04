import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";





const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    /* Insertar productos de JSON en Firestore */
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");

        arrayProducts.forEach((documento) => {
            addDoc(itemsCollection, documento)
        });
    }, []); */

    /* Consulta de productos en Firestore */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((prod) =>
                ({ id:prod.id, ...prod.data() })
            ));
        });
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )

}

export default ItemListContainer;