import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/binary_clock',
  plugins: [
    react(),
  ],
  build: {
    outDir: "build",
  },
})
