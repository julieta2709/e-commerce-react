import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid barra">
            <div className="row">
                <div className="col-md-10">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand me-auto" to={"/"}><img className="cupcake" src={"images/cupcake-cereza.svg"} alt="cupcake" width={40} />Tienda de cupcakes</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/Productos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Productos
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to={"/category/chocolate"}>Cupcakes de chocolate</NavLink></li>
                                            <li><NavLink className="dropdown-item" to={"category/vainilla"}>Cupcakes de vainilla</NavLink></li>
                                            <li><NavLink className="dropdown-item" to={"/category/limon"}>Cupcakes de limón</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><Link className="nav-link" to={"/"}>Locales</Link></li>
                                    <li><Link className="nav-link" to={"/"}>Comprar</Link></li>
                                    <li><Link className="nav-link" to={"/"}>Nosotros</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 d-flex justify-content-around align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;