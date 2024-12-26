import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Data Impact",
  description: "Empower Your Will",
  metadataBase: new URL("https://dataimpact.vn/"),
  openGraph: {
    images: ["https://dataimpact.vn/images/logo-no-title.png"],
  },
  twitter: {
    images: ["https://dataimpact.vn/images/logo-no-title.png"],
  },
  icons: ["https://dataimpact.vn/images/logo-no-title.png"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
