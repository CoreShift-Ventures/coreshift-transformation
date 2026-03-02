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
  title: "CoreShift | AI Agents for Operations",
  description: "CoreShift builds AI agents for any enterprise operation — deployed on your infrastructure, monitored 24/7, one monthly subscription. Live across manufacturing, finance, VC, SaaS, and automotive.",
  keywords: ["AI agents", "operations automation", "enterprise AI", "process automation", "SAP automation", "business operations", "workflow automation"],
  authors: [{ name: "CoreShift" }],
  creator: "CoreShift",
  metadataBase: new URL("https://cshift.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cshift.io",
    siteName: "CoreShift",
    title: "Any operation your team does manually today, an agent can do better.",
    description: "CoreShift builds, deploys, and maintains AI agents tailored to your exact business processes. Real data. Real systems. Real results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreShift - AI Agents for Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Any operation your team does manually today, an agent can do better.",
    description: "CoreShift builds, deploys, and maintains AI agents tailored to your exact business processes. Real data. Real systems. Real results.",
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
