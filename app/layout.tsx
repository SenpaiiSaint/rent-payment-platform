import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent Payment Platform",
  description: "Designed by BlueSky Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-stone-100`}>
        {/* ✅ NavBar */}
        <NavBar />
        
        {/* ✅ Main Content */}
        <div className="container mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
