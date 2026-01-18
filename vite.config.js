import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'NOME-DO-SEU-REPO' pelo nome exato que você criou no GitHub
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", 
})