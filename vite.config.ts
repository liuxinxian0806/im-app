import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    proxy: {
      "/dev/api": {
        target: "https://embed.yhc56.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dev\/api/, "/dev/api"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/renderer"),
    },
  },
  build: {
    outDir: "dist/renderer",
  },
});
