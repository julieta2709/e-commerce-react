import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid barra">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 text-end">
                        <p>
                            <img className="redes" src={"images/facebook.svg"} alt="Facebook" width={40} />
                            <img className="redes" src={"images/instagram.svg"} alt="Instagram" width={40} />
                            <img className="redes" src={"images/whatsapp.svg"} alt="Whatsapp" width={40}/>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;