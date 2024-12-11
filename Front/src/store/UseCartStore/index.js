// Front/src/store/UseCartStore/index.js
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// Crea la tienda Zustand
const useCartStore = create(
  combine(
    {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'), // Inicializa el carrito desde localStorage
    },
    (set) => ({
      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.cart.find(item => item.id === product.id);
          let newCart;

          if (existingProduct) {
            // Si el producto ya existe, incrementa la cantidad
            newCart = state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // Si no existe, agrega el producto con cantidad 1
            newCart = [...state.cart, { ...product, quantity: 1 }];
          }

          localStorage.setItem('cart', JSON.stringify(newCart)); // Guarda el nuevo carrito en localStorage
          return { cart: newCart };
        });
      },
      removeFromCart: (productId) => set((state) => {
        const newCart = state.cart.filter((product) => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart)); // Actualiza localStorage
        return { cart: newCart };
      }),
      updateQuantity: (productId, quantity) => set((state) => {
        const newCart = state.cart.map((product) =>
          product.id === productId ? { ...product, quantity } : product
        );
        localStorage.setItem('cart', JSON.stringify(newCart)); // Actualiza localStorage
        return { cart: newCart };
      }),
      clearCart: () => {
        set({ cart: [] });
        localStorage.removeItem('cart'); // Elimina el carrito de localStorage
      },
    }),
  ),
);

export default useCartStore;