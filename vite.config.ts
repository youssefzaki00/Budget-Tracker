import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "",
  css: {
    devSourcemap: true,
  },
  plugins: [react(), viteTsconfigPaths()],
});
