import type { Config } from "tailwindcss";
import sharedConfig from "@di/tailwind-config";

const config: Pick<
  Config,
  "prefix" | "presets" | "content" | "darkMode" | "plugins"
> = {
  darkMode: ["class"],
  content: [
    "./src/**/*.tsx",
    "../../packages/components-ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    sharedConfig,
    {
      theme: {
        extend: {
          colors: {
            main: {
              blue: "#3260EC",
              black: "#161718",
              white: "#FBFBFC",
              gray: "#1E1E1E80",
              disable: "#D1D3D4",
              gradientA: "#231815",
              gradientB: "#282e57",
              border: "#A2A2A3",
            },
            support: {
              riverBed: "#3F4B54",
              lemonGrass: "#A09890",
              dawnPink: "#EBEBEB",
              beanRed: "#1C3563",
              ash: "#CBC5B1",
            },
            "white-opacity": "rgba(255, 255, 255, 0.14)",
            "white-opacity-develop": "rgba(255, 255, 255, 0.80)",
          },
          fontFamily: {
            mplus1: ["var(--font-mplus1)", "Arial"],
            lensgrotesk: ["var(--font-lens-grotesk)", "Arial"],
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
        },
      },
    },
  ],
  plugins: [require("tailwindcss-animate")],
};

export default config;
