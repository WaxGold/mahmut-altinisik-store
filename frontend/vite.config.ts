import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // isteğe bağlı: base, server.port vb. ekleyebilirsin
  server: {
    port: 5173
  }
});