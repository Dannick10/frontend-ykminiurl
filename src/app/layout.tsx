import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YKMiniURL - Encurtador de Links Gratuito e Seguro",
  description:
    "Transforme seus links longos em URLs curtas e fáceis de compartilhar. Obtenha informações detalhadas, adicione segurança com senha e acompanhe o desempenho dos seus links.",
  keywords: [
    "encurtador de links",
    "URLs curtas",
    "links seguros",
    "análise de links",
    "YKMiniURL",
    "encurtar URLs",
    "compartilhar links",
  ],
  authors: [
    { name: "Daniel Rocha", url: "https://dannickportifolio.vercel.app/" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://ykminiurl.vercel.app/",
    title: "YKMiniURL - Encurtador de Links Gratuito e Seguro",
    description:
      "Simplifique seus links e compartilhe com facilidade. YKMiniURL é o encurtador perfeito para criar URLs curtas, adicionar senhas e acompanhar métricas.",
    images: [
      {
        url: "https://ykminiurl.vercel.app/banner.jpg",
        width: 1200,
        height: 630,
        alt: "YKMiniURL - Transforme seus links longos em curtos e seguros",
      },
    ],
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="google-adsense-account" content="ca-pub-4567665986142588" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4567665986142588"
     crossOrigin="anonymous"></script>
        <meta
          name="google-site-verification"
          content="gkdx1Oj0RB6e4bIKK2LyQwqYMT3E8RLWfs7rMC_w-AA"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="py-8 min-h-80">{children}</main>
        <Footer />
      </body>
    </html>
  );
}