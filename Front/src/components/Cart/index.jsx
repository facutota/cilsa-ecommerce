import React from 'react';
import useCartStore from '../../store/UseCartStore'; // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const cart = useCartStore((state) => state.cart); // Obtén el estado del carrito
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId); // Elimina el producto si la cantidad es menor a 1
    } else {
      updateQuantity(productId, newQuantity); // Actualiza la cantidad
    }
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className='text-white'>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className='text-white'>
              {product.name} - Precio: ${product.price} - Cantidad: 
              <input
                type="number"
                value={product.quantity || 1}
                min="1"
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                style={{ width: '50px' }} // Ajusta el ancho aquí
              />
              - Subtotal: ${product.price * product.quantity} - 
              <img src={product.image} alt={product.name} style={{ width: '50px' }} />
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total}</h2> {/* Muestra el total del carrito */}
    </div>
  );
};

export default Cart;