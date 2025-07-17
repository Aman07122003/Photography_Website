import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
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
})
