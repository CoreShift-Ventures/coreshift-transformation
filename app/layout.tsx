import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CoreShift | Agents as a Service",
  description: "CoreShift builds AI agents for any enterprise operation — deployed on your infrastructure, monitored 24/7, one monthly subscription. Live across manufacturing, finance, VC, SaaS, and automotive.",
  keywords: ["AI agents", "operations automation", "enterprise AI", "process automation", "SAP automation", "business operations", "workflow automation", "agents as a service"],
  authors: [{ name: "CoreShift" }],
  creator: "CoreShift",
  metadataBase: new URL("https://cshift.io"),
  icons: {
    icon: [
      { url: "/logos/New_Logo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logos/New_Logo/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cshift.io",
    siteName: "CoreShift",
    title: "Agents as a Service | AI agents for any enterprise operation",
    description: "CoreShift builds, deploys, and maintains AI agents tailored to your exact business processes. Your infrastructure. 24/7 monitoring. One subscription.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreShift - Agents as a Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agents as a Service | AI agents for any enterprise operation",
    description: "CoreShift builds, deploys, and maintains AI agents tailored to your exact business processes. Your infrastructure. 24/7 monitoring. One subscription.",
    images: ["/twitter-image.png"],
    creator: "@coreshift",
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
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
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
