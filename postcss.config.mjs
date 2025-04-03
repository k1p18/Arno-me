// import tailwindcss from "tailwindcss";
// import aspectRatio from "@tailwindcss/aspect-ratio";

// const config = {
//   plugins: ["@tailwindcss/postcss", aspectRatio(), tailwindcss()],
//   variants: {
//     extend: {
//       translate: ["group-hover"], // Add group-hover to translate variants
//     },
//   },
//   theme: {
//     extend: {
//       colors: {
//         primary: "#035156",
//       },
//       screens: {
//         xsm: "320px", // Custom xsm breakpoint
//         asm: { max: "425px", min: "325px" },
//         ssm: { max: "640px", min: "425px" },
//         sm: "640px", // Default sm breakpoint (unchanged)
//         md: "768px",
//         lg: "1024px",
//         xl: "1280px",
//       },
//     },
//   },
//   container: {
//     center: true,
//     padding: {
//       DEFAULT: "1 rem",
//       sm: "2 rem",
//       lg: "4 rem",
//       xl: "5 rem",
//       "2xl": "6 rem",
//     },
//   },
// };

// export default config;

// tailwind.config.js (or tailwind.config.mjs if using ES modules)

import aspectRatio from "@tailwindcss/aspect-ratio";
import {customColors} from "./color"

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#035156",
        ...customColors,
      },
      screens: {
        xsm: "320px", // Custom xsm breakpoint
        asm: { max: "425px", min: "325px" },
        ssm: { max: "640px", min: "425px" },
        sm: "640px", // Default sm breakpoint (unchanged)
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    aspectRatio, // Correct way to use the aspect ratio plugin
  ],
  variants: {
    extend: {
      translate: ["group-hover"], // Add group-hover to translate variants
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem", // Fixed padding values (removed extra spaces)
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
};

