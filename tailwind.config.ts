import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.tsx"],
  important: true,
  plugins: [],
  theme: {
    extend: {
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
      },
    },
  },
}
export default config
