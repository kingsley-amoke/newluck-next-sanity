import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "../providers/CartProvider";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "../modals/shopping-cart-modal";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewLuck",
  description: "Shop your phones and labtops | easy and reliable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

      <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
