import React from 'react';
import CardBuy from '../../components/CardBuy';

const productosAereos = [
    { id: 1, name: 'Avión 1', image: '/images/avion.jpg' },
    { id: 2, name: 'Avión 2', image: '/images/avioncombate.jpg' },
    { id: 3, name: 'Avión 3', image: '/images/avionf16.jpg' },
    { id: 4, name: 'Avión 4', image: '/images/avionf17.jpg' },
    { id: 5, name: 'Avión 5', image: '/images/avion.jpg' },
    { id: 6, name: 'Avión 6', image: '/images/avion.jpg' },
    // Agrega más productos según sea necesario
];

const Aereos = ({ addToCart }) => {
    return (
        <div>
            <h1>Aéreos</h1>
            <div className="grid-container"> 
               
                {productosAereos.map((producto) => (
                    <CardBuy 
                        key={producto.id} 
                        name={producto.name} 
                        image={producto.image} 
                        addToCart={addToCart} 
                    />
                                    ))}
               
            </div>
        </div>
    );
};

export default Aereos;