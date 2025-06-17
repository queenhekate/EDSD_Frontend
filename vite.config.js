import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/EDSD_Frontend/",
  plugins: [react()],
});