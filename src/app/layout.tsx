import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zest Mart | 10 minutes Grocery Delivery App",
  description: "10 minutes Grocery Delivery App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* bg-green-500 is Tailwind — change to any Tailwind green (or hex using bg-[#00ff00]) */}
      <body className="w-full min-h-screen bg-green-500">
        {children}
      </body>
    </html>
  );
}

