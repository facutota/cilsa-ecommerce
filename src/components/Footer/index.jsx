import React from 'react';

const Footer = () => {
    return (
        <footer className="f bg-dark text-white pb-4" id="contacto">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    {/* Columna de descripción */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Alumnos</h5>
                        <p>Medina Carranza Facundo Martin</p>
                        <p>Zubillaga Javier</p>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <a href="https://www.cilsa.org/" className="text-white"><strong>CILSA.ORG</strong></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;