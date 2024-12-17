import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { StarknetProvider } from "./components/starknet-provider";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "Autoswappr",
  description:
    "Autoswappr is an innovative blockchain platform designed to simplify token management. Whether you're a trader, a frequent blockchain user, or a novice in crypto, Autoswappr ensures that every token you receive is automatically converted into a stable token of your choice, protecting your funds from volatility.",
  openGraph: {
    title: "Autoswappr",
    description:
      "Autoswappr is an innovative blockchain platform designed to simplify token management. Whether you're a trader, a frequent blockchain user, or a novice in crypto, Autoswappr ensures that every token you receive is automatically converted into a stable token of your choice, protecting your funds from volatility.",
    type: "website",
    locale: "en_US",
    siteName: "Autoswappr",
    // url: "https://autoswappr.com", 
    // // Replace with your actual URL
    // images: [
    //   {
    //     url: "https://autoswappr.com/og-image.png", 
    //     width: 1200,
    //     height: 630,
    //     alt: "Autoswappr Platform",
    //   },
    // ],
  },
  twitter: {
    title: "Autoswappr",
    description:
      "Autoswappr simplifies token management by automatically converting tokens to stablecoins, protecting your funds from volatility.",
    images: ["https://x.com/auto_swappr/photo"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StarknetProvider>
        <body className="relative w-full bg-[#08001F] bg-cover bg-center bg-no-repeat">
          <Navbar />
          <main className="mt-24">        {/* i added margin top here */}
            {children}
          </main>
          <Footer />
        </body>

      </StarknetProvider>
    </html>
  );
}
