import { apply } from "node_modules/astro/dist/core/polyfill";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeInK 1s ease-in-out",
        fadeOut: "fadeOutK 1s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeInK: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeOutK: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
