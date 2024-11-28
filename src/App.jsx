import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contacto from './pages/Contacto';
import './App.css'


const App = () => {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<NotFound />} /> {/* Ruta para manejar 404 */}
            </Routes>
        </Router>
    );
};

export default App;