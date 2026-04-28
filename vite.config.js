import { defineConfig } from "vite"
// import { path } from "node:path"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        strictPort: true,
        proxy: {
            "/api": "http://localhost:8000", //fetch('/api/products')
        },
    },
    resolve: {
        alias: {
            // "@": "/src",
            // "@": path.resolve(__dirname, "./src"),
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: "build", //change khi build production
    },
})
