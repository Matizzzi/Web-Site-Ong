import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';
import Header from "@/components/shared/header";


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
      <body className={inter.className}>
        <Header /> {/* Aquí se agrega el componente Header */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

// Asegúrate de que este Header no esté en conflicto con el anterior

