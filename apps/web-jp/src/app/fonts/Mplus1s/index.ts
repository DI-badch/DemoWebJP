import localFont from "next/font/local";

export const Mplus1 = localFont({
  src: [
    {
      path: "./MPLUS1-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MPLUS1-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MPLUS1-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./MPLUS1-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./MPLUS1-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--font-mplus1",
});
