import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import ContentContainer from "@/components/layout/ContentContainer";

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
        <SideBar />

        {/* Container */}
        <div className="flex flex-1 flex-col">
          <NavBar />

          <main className="relative flex-1 overflow-y-auto p-4">
            <ContentContainer>{children}</ContentContainer>
          </main>
        </div>
      </body>
    </html>
  );
}
