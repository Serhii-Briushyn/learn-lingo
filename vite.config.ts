import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      styles: "/src/styles",
      context: "/src/context",
      helpers: "/src/helpers",
      hooks: "/src/hooks",
      service: "/src/service",
      utils: "/src/utils",
    },
  },
});
