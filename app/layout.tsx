import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CoreShift | Modern Business Systems for Scaling Companies",
  description: "We transform your operations into modern web applications. Enterprise-grade systems, deployed in weeks not months.",
  keywords: ["business systems", "digital transformation", "custom software", "web applications", "automation", "enterprise software"],
  authors: [{ name: "CoreShift" }],
  creator: "CoreShift",
  metadataBase: new URL("https://cshift.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cshift.io",
    siteName: "CoreShift",
    title: "CoreShift | Modern Business Systems for Scaling Companies",
    description: "We transform your operations into modern web applications. Enterprise-grade systems, deployed in weeks not months.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreShift - Modern Business Systems for Scaling Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreShift | Modern Business Systems for Scaling Companies",
    description: "We transform your operations into modern web applications. Enterprise-grade systems, deployed in weeks not months.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
