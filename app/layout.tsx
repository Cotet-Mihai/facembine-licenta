import type {Metadata} from "next";
import "./globals.css";
import {montserrat} from "@/lib/fonts";
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Toaster} from "sonner";
import React from "react";
import {createClient} from "@/lib/supabase/client";
import PublicNavBar from "@/components/shared/PublicNavBar";
import {PublicNavBar as PrivateNavBar} from "@/components/shared/PrivateNavBar";

export const metadata: Metadata = {
    title: "CIVICOM",
    description: "Un spațiu creat de comunitate, pentru comunitate. Descoperă și centralizăm inițiative locale de " +
        "activism, voluntariat și implicare civică, pentru a sprijini comunitatea și a face o diferență reală.",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // Verifica daca utilizatorul este inregistrat
    const supabase = await createClient();
    const { data } = await supabase.auth.getClaims();
    const user = data?.claims;

    return (
        <html lang="ro">
        <body className={montserrat.className}>
        {
          user ? <PrivateNavBar/> : <PublicNavBar/>
        }
        {children}
        <Analytics/>
        <SpeedInsights/>
        <Toaster position="top-center" richColors/>
        </body>
        </html>
    );
}
