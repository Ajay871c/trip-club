import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Dancing_Script } from "next/font/google";
import Head from "next/head";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"], // Or any weight you need
    variable: "--font-dancing-script", // Optional: for CSS variable use
});

export const metadata = {
    title: "Trip Club",
    description: "for template purpose",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
