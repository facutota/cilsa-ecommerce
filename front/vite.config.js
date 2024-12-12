import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    // Puedes agregar headers aquí si necesitas asegurar el tipo MIME
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});