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
  server: {
    host: true,
    port: 5173,
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          swiper: ["swiper/react", "swiper/modules"],
          framer: ["framer-motion"],
          icons: ["lucide-react"],
          router: ["react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
    // Performance optimizations
    minify: 'esbuild', // Use esbuild instead of terser
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Image optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});

