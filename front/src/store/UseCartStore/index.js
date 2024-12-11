import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import API_URL from '../../config/api';

const useCartStore = create(
  combine(
    {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'), // Inicializa el carrito desde localStorage
      products: [], // Agrega un estado para los productos
    },
    (set) => ({
      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.cart.find(item => item.id === product.id);
          let newCart;

          if (existingProduct) {
            newCart = state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            newCart = [...state.cart, { ...product, quantity: 1 }];
          }

          localStorage.setItem('cart', JSON.stringify(newCart));
          return { cart: newCart };
        });
      },
      removeFromCart: (productId) => set((state) => {
        const newCart = state.cart.filter((product) => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
      }),
      updateQuantity: (productId, quantity) => set((state) => {
        const newCart = state.cart.map((product) =>
          product.id === productId ? { ...product, quantity } : product
        );
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
      }),
      clearCart: () => {
        set({ cart: [] });
        localStorage.removeItem('cart');
      },
      fetchProducts: async (tipo) => {
        try {
          const response = await fetch(`${API_URL}/products${tipo ? `?tipo=${tipo}` : ''}`);
          const data = await response.json();
          set({ products: data });
        } catch (error) {
          console.error('Error al obtener productos:', error);
        }
      },
    }),
  ),
);

export default useCartStore;