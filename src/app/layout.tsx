import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProductX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="font-geist flex h-screen bg-gray-50">
        {/* Sidebar */}
        <SideBar />

        {/* Container */}
        <div className="flex flex-1 flex-col">
          {/* Navbar */}
          <NavBar />

          {/* Content */}
          <main className="relative flex-1 overflow-y-auto p-4">
            <article className="flex h-full flex-col overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-md">
              {children}
            </article>
          </main>
        </div>
      </body>
    </html>
  );
}
