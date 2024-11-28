import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contacto from './pages/Contacto';
import Todos from './pages/productos/Todos'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
    return (
        
        <Router>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-between p-8 lg:p-24">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/productos/todos" element={<Todos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
           
        </main>
        
       <Footer/>
    </Router>
        
    );
};

export default App;