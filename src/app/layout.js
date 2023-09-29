import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import AuthSessionProvider from "@/components/AuthSession";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col`}>
                <AuthSessionProvider>
                    <Navbar />
                    <Toaster />
                    {children}
                    <Footer />
                </AuthSessionProvider>
            </body>
        </html>
    );
}
