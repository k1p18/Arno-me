const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        asm: { max: "425px", min: "325px" },
        ssm: { max: "640px", min: "425px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1 rem",
      sm: "2 rem",
      lg: "4 rem",
      xl: "5 rem",
      "2xl": "6 rem",
    },
  },
};
export default config;
