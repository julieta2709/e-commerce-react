import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";





const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((prod) =>
                ({ id: prod.id, ...prod.data() })
            ));
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container py-5">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer;