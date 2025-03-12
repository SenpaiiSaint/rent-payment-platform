import { Inter } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";
import "./globals.css";

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
        <nav className="bg-blue-600 p-4 text-white">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/payments" className="mr-4">Payments</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
