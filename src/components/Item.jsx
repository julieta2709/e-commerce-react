import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{item.title}</h5>
                            <p className="card-text text-justify">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;