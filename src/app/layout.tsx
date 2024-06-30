import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({ weight:["400","500","600","700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnlyBurg - order now!",
  description: "THe best online Burger Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
