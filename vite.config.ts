import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    fs: {
      strict: false, // Disable strict file serving restrictions
    },
  },
});
