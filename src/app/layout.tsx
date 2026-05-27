import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidaflow.health"),
  title: "VidaFlow | Achieve Your Peak Vitality",
  description: "Achieve your peak vitality through the natural flow of Fuxion's nutritional science.",
  keywords: ["Fuxion", "Vitality", "Health", "Wellness", "Natural Supplements", "VidaFlow"],
  authors: [{ name: "VidaFlow Team" }],
  openGraph: {
    title: "VidaFlow | Achieve Your Peak Vitality",
    description: "Achieve your peak vitality through the natural flow of Fuxion's nutritional science.",
    url: "https://vidaflow.health",
    siteName: "VidaFlow",
    images: [
      {
        url: "/logo_v2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidaFlow | Achieve Your Peak Vitality",
    description: "Achieve your peak vitality through the natural flow of Fuxion's nutritional science.",
    images: ["/logo_v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <img src="/logo_v2.png" alt="VidaFlow Logo" className="h-10 w-auto" />
              VidaFlow
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
              <Link href="/shop" className="hover:text-primary transition-colors font-medium">Shop</Link>
              <Link href="/about" className="hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
            <button className="md:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>

        <footer className="bg-foreground text-white py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">VidaFlow</h3>
                <p className="text-gray-400">
                  Achieve your peak vitality through the natural flow of Fuxion's nutritional science.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Social icons placeholders */}
                  <span className="text-gray-400">Instagram</span>
                  <span className="text-gray-400">TikTok</span>
                  <span className="text-gray-400">Facebook</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} VidaFlow. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
