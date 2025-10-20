import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['task-app-9whz.onrender.com'],
  },
})
