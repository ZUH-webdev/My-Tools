import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, 
    minify: 'esbuild',
    chunkSizeWarningLimit: 3000, 
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("firebase") || id.includes("dotlottie")) {
              return "vendor-heavy";
            }
            return "vendor-main";
          }
          if (id.includes("LandingPageComponents/")) {
            return "section-landing";
          }
          if (id.includes("product-finder-pages/") || id.includes("ProductFinderComponents/")) {
            return "section-product-finder";
          }
          if (id.includes("pages/")) {
            return "section-pages";
          }
        },
      },
    },
  },
});