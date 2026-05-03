import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetMantine from "postcss-preset-mantine";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/openmockup-pages/" : "/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssPresetMantine(),
      ],
    },
  },
});
