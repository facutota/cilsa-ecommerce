import React from 'react';

const Home = () => {
    return (
        <div>
            <header className="bg-dark">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                    <div className="container-fluid">
                        <a className="navbar-brand text-uppercase font-weight-bold" href="/">Vendemos vehículos</a>

                        {/* Botón de menú móvil */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Enlaces del menú */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#destacados">Inicio</a>
                                </li>

                                {/* Menú desplegable Productos */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#todos">Todos</a></li>
                                        <li><a className="dropdown-item" href="#aereos">Aereos</a></li>
                                        <li><a className="dropdown-item" href="#acuaticos">Acuaticos</a></li>
                                        <li><a className="dropdown-item" href="#terrestres">Terrestres</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <h2 id="destacados">PRODUCTOS DESTACADOS</h2>

            {/* Slider */}
            <div className="slider">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators"></div>
                    <div className="carousel-inner slider"></div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>

            {/* Cards */}
            <h2 id="todos">Todos los vehículos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            {/* Aéreos */}
            <h2 id="aereos">Vehículos Aéreos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-aereos">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            {/* Acuáticos */}
            <h2 id="acuaticos">Vehículos Acuáticos</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-acuaticos">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            {/* Terrestres */}
            <h2 id="terrestres">Vehículos Terrestres</h2>
            <div className="cards">
                <div className="container mt-4">
                    <div className="row justify-content-center" id="cards-container-terrestres">
                        {/* Aquí puedes agregar tus tarjetas */}
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-white pt-5 pb-4" id="contacto">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        {/* Columna de descripción */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold">Alumnos</h5>
                            <p>Medina Carranza Facundo Martin</p>
                            <p>Quevedo Francisco</p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="row align-items-center">
                        <a href="https://www.cilsa.org/" className="text-white"><strong>CILSA.ORG</strong></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;