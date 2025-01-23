import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "node:path";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // This assumes 'src' is the root folder
    },
  },
  server: {
    port: 3000,
    fs: {
      strict: false, // Disable strict file serving restrictions
    },
  },
});
