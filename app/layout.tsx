import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Navbar from "./components/navbar";
import { StarknetProvider } from "./components/starknet-provider";
import Footer from "./components/footer";
import { siteConfig } from "@/config/site";

const creatoDisplay = localFont({
  src: [
    {
      path: "../public/fonts/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CreatoDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-creato-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@auto_swappr",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={creatoDisplay.variable}>
      <StarknetProvider>
        <body className="relative w-[100vw] h-fit overflow-x-hidden bg-[#02060D] font-creato">
          <NextTopLoader
            color="#1d8cf4"
            height={3}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #1d8cf4,0 0 5px #1d8cf4"
          />
          <Navbar />
          <main className="relative h-full">{children}</main>
          <Footer />
        </body>
      </StarknetProvider>
    </html>
  );
}
