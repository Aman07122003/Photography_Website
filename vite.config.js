import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              bungee: ['"Bungee"', 'cursive'], // Add your font name here
            },
          },
        },
      },
    }),
  ],
  base: '/photography-website/', // Set base for GitHub Pages
})
