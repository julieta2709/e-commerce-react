import React from "react";
import { useParams, Link } from "react-router-dom";

const Salida = ()=>{

    const {id} = useParams ();

    return (
        <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div class="alert alert-danger" role="alert">
                            <h2>Gracias por tu compra!</h2>
                            <p>Tu número de compra es: <b>{id}</b></p>
                            </div>
                        <Link to={"/"} className="btn btn-danger btn-sm mx-4">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
    )
}

export default Salida;