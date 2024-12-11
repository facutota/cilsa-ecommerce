import React from 'react';
import CardBuy from '../../components/CardBuy';
import useCartStore from '../../store/UseCartStore';

const productosAereos = [
    { id: 1, name: 'Avión 1', image: '/images/avion.jpg', price: 100 },
    { id: 2, name: 'Avión 2', image: '/images/avioncombate.jpg', price: 150 },
    { id: 3, name: 'Avión 3', image: '/images/avionf16.jpg', price: 200 },
    { id: 4, name: 'Avión 4', image: '/images/avionf17.jpg', price: 250 },
    { id: 5, name: 'Avión 5', image: '/images/avion.jpg', price: 100 },
    { id: 6, name: 'Avión 6', image: '/images/avion.jpg', price: 100 },
    // Agrega más productos según sea necesario
  ];
const Aereos = () => {
  return (
    <div>
      <h1>Aéreos</h1>
      <div className="grid-container">
        {productosAereos.map((producto) => (
          <CardBuy 
            key={producto.id} 
            product={producto} // Asegúrate de pasar el prop product correctamente
          />
        ))}
      </div>
    </div>
  );
};

export default Aereos;