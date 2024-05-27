import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.tsx"],
  important: true,
  plugins: [],
  theme: {
    extend: {
      backgroundImage:{
        "custom-gradient-1": "linear-gradient(180deg, #A1A5F2 0%, #8175EA 100%)",
        "custom-gradient-2": "linear-gradient(180deg, #FAE475 0%, #FFAB52 100%)",
        "custom-gradient-3": "linear-gradient(180deg, #E99FF2 0%, #D375EA 100%)",

      },
      colors: {
        primary: {
          main: "var(--color-primary-main)",
        },
        secondary: {
          main: "var(--color-secondary-main)",
        },
      },
      screens: {
        lg: "1200px",
        md: "900px",
        sm: "600px",
        xl: "1600px",
      }
    },
  },
}
export default config
