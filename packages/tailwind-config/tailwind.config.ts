import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#fff",
          dark: "#000",
          main: "#2e80ec",
          secondary: "#D9D9D9",
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
  content: ["./src/**/*.tsx"],
  prefix: "di-",
};

export default config;
