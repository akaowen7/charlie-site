import { apply } from "node_modules/astro/dist/core/polyfill";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "fade-in-1": "fade-in-keys 1s ease-in-out forwards",
        "fade-out-1": "fade-out-keys 1s ease-in-out forwards",
        "fade-in-.5": "fade-in-keys .5s ease-in-out forwards",
        "fade-out-.5": "fade-out-keys .5s ease-in-out forwards",
      },

      // that is actual animation
      keyframes: () => ({
        "fade-in-keys": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        "fade-out-keys": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
