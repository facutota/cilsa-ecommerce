import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCartStore from '../../store/UseCartStore';
import Badge from '@mui/material/Badge'; 

const Header = () => {
    const cart = useCartStore((state) => state.cart);
        const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <header className="bg-dark">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-uppercase font-weight-bold" to="/">Vendemos vehículos</Link>

                    {/* Botón de menú móvil */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Enlaces del menú */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item pt-1 mr-4">
                                <Badge badgeContent={totalItems} color="primary" className=''>
                                    <Link  to="/cart">
                                        <ShoppingCartIcon color="success" />
                                    </Link>
                                </Badge>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Inicio</Link>
                            </li>

                            {/* Menú desplegable Productos */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Productos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/productos/todos">Todos</Link></li>
                                    <li><Link className="dropdown-item" to="/productos/aereos">Aéreos</Link></li>
                                    <li><Link className="dropdown-item" to="/productos/acuaticos">Acuáticos</Link></li>
                                    <li><Link className="dropdown-item" to="/productos/terrestres">Terrestres</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;