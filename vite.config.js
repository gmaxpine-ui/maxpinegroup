import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //  '@' alias define
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separate vendor chunk
          
          // ui: ["@/components/ui/button", "@/components/ui/card"],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increase size limit to hide warning
  },
});
