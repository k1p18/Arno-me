// tailwind.config.mjs
import aspectRatio from '@tailwindcss/aspect-ratio'; // ES module import

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#035156", // Custom primary color
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
    aspectRatio, // ES module import of the plugin
  ],
  variants: {
    extend: {
      translate: ["group-hover"], // Add group-hover to translate variants
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem", // Fixed padding values
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
};
