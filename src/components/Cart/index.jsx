import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - <img src={product.image} alt={product.name} style={{ width: '50px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;