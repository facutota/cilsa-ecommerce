import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contacto from './pages/Contacto';
import Todos from './pages/productos/Todos'
import Header from './components/Header';
import Footer from './components/Footer';
import Terrestres from './pages/productos/Terrestres';
import Aereos from './pages/productos/Aereos';
import Acuaticos from './pages/productos/Acuaticos';
import Cart from './components/Cart'; 

import './App.css'


const App = () => {

    return (
        <Router>
            <div className="flex flex-col  "> {/* Asegúrate de que el contenedor principal ocupe toda la altura */}
                <Header />
                <main className="flex-grow flex flex-col items-center justify-between p-8 lg:p-24 ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/productos/todos" element={<Todos />} />
                        <Route path="/productos/aereos" element={<Aereos/>} />
                        <Route path="/productos/terrestres" element={<Terrestres />} />
                        <Route path="/productos/acuaticos" element={<Acuaticos />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer /> {/* Asegúrate de que el Footer esté aquí */}
            </div>
        </Router>
    );
};

export default App;