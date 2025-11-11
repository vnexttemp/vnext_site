// client/vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // The '@' alias now points to the 'src' folder inside 'client'
      "@": path.resolve(import.meta.dirname, "src"),
      // The '@shared' alias needs to go up one level to find the 'shared' folder
      "@shared": path.resolve(import.meta.dirname, "../shared"),
    },
  },
  build: {
    // This will build the output into 'client/dist', which is standard for Vite & Vercel
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
