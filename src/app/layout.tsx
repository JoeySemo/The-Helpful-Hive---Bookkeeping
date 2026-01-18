import type { Metadata } from "next";
// Main Portal uses Geist font as before
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "The Helpful Hive",
    description: "Bookkeeping & Home Concierge Services",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased min-h-screen flex flex-col`}
            >
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
