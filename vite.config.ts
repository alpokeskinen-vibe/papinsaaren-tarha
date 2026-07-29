import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
});
