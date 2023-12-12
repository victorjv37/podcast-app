import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSass from "vite-plugin-sass";
import ViteSassPlugin from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSass(),
    ViteSassPlugin({
      preprocessorOptions: {
        scss: {
          additionalData: `
          $theme-colors: (
            "info": tomato,
            "danger": teal
          );
        `
        }
      }
    })
  ]
});
