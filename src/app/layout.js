import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppScrip E-Commerce",
  description:
    "AppScrip is a robust e-commerce solution offering user-friendly design, secure payment processing, and powerful marketing tools, enabling businesses to easily establish and grow their online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
