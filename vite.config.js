import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Patient-and-Health-Insurance-Management-System-Group20-Frontend1/',
  plugins: [react()],
  build: {
    outDir: 'dist',  // This should match the directory name Render is expecting
  }
})

