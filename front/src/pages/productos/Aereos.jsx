import React, { useEffect } from 'react';
import CardBuy from '../../components/CardBuy';
import useCartStore from '../../store/UseCartStore';

const Aereos = () => {
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const products = useCartStore((state) => state.products);

  useEffect(() => {
    fetchProducts('aereo');
  }, [fetchProducts]);

  return (
    <div>
      <h1>Aéreos</h1>
      <div className="grid-container">
        {products.map((producto) => (
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