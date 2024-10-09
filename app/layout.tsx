import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';
import Header from "@/components/shared/header";
import { cn } from "@/libs/util";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ong Plataformas digitales",
  description: "Consumo responsable ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-100", inter.className)}>
        <Header /> {/* Aquí se a grega el componente Header */}
        <main className="h-full flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}

// Asegúrate de que este Header no esté en conflicto con el anterior

