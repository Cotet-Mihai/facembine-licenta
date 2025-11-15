import type { Metadata } from "next";
import "./globals.css";
import PublicNavBar from "@/components/shared/PublicNavBar";
import {montserrat} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CIVICOM",
  description: "Un spațiu creat de comunitate, pentru comunitate. Descoperă și centralizăm inițiative locale de " +
      "activism, voluntariat și implicare civică, pentru a sprijini comunitatea și a face o diferență reală.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <PublicNavBar/>
        {children}
      </body>
    </html>
  );
}
