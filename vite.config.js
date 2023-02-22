import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./docs/",
    chunkSizeWarningLimit: 1000,
  },
  base: "./",
  server: {
    port: 3000,
  },
  plugins: [react(), viteCompression()],
})
