import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavigationBar from "./ui/components/Navbar/NavigationBar";
import Footer from "./ui/components/Footer/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kukuh Ardi Ramadhan",
  description: "Kukuh Ardi Ramadhan Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
