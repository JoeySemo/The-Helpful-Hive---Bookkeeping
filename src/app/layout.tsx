import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import PreFooter from "@/components/PreFooter";
import BuzzCallProvider from "@/components/BuzzCallProvider";
import "./globals.css";

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "The Helpful Hive | Home, Pet & Bookkeeping Services",
    description: "Because even the busiest bees need a little help. The Helpful Hive offers services for busy homes, pets, families, and small businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${lora.variable} ${montserrat.variable}`}>
            <body className="antialiased min-h-screen flex flex-col bg-[#FFF8E7]">
                <BuzzCallProvider>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <PreFooter />
                    <FooterWrapper />
                </BuzzCallProvider>
            </body>
        </html>
    );
}


