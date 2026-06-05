import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import copy from 'rollup-plugin-copy'

// Truco necesario para que "__dirname" funcione correctamente en proyectos modernos (ESM)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    tailwindcss(),
    copy({
      targets: [
        // Toma tu base de datos y la clona en la carpeta de producción
        { src: 'data.json', dest: 'dist' } 
      ],
      hook: 'writeBundle' // Se ejecuta al terminar de compilar todo
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})