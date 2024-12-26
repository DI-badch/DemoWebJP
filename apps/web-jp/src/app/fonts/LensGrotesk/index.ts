import localFont from "next/font/local";

export const LensGrotesk = localFont({
  src: [
    {
      path: "./LensGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./LensGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./LensGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./LensGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--font-lens-grotesk",
});
