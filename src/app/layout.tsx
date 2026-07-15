import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yabeshtronic.com"),
  title: {
    default: "Sewa Mesin Fotocopy Tangerang & Jakarta | PT Yabesh Tronic",
    template: "%s | PT Yabesh Tronic",
  },
  description: "Pusat jasa sewa mesin fotocopy berkualitas (Canon IR) untuk bisnis dan perkantoran di Tangerang, Jakarta, dan sekitarnya. Harga kompetitif, layanan servis profesional, dan spare parts lengkap.",
  keywords: [
    "Sewa Fotocopy Tangerang",
    "Sewa Fotocopy Jakarta",
    "Rental Mesin Fotocopy B2B",
    "PT Yabesh Tronic",
    "Fotocopy Canon IR Advance",
    "Harga Sewa Fotocopy Perkantoran",
    "Service Mesin Fotocopy Panggilan",
    "Sewa Mesin Fotocopy Jabodetabek",
    "Suku Cadang Fotocopy"
  ],
  authors: [{ name: "PT Yabesh Tronic", url: "https://yabeshtronic.com" }],
  creator: "PT Yabesh Tronic",
  publisher: "PT Yabesh Tronic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sewa Mesin Fotocopy Tangerang & Jakarta | PT Yabesh Tronic",
    description: "Pusat jasa sewa mesin fotocopy berkualitas untuk bisnis dan perkantoran. Layanan cepat, harga kompetitif, dan mesin prima.",
    url: "https://yabeshtronic.com",
    siteName: "PT Yabesh Tronic",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo-company.png",
        width: 800,
        height: 800,
        alt: "PT Yabesh Tronic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Mesin Fotocopy Tangerang & Jakarta | PT Yabesh Tronic",
    description: "Pusat sewa mesin fotocopy berkualitas dengan pelayanan terbaik. Konsultasi gratis!",
    images: ["/logo-company.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PT Yabesh Tronic",
  "image": "https://yabeshtronic.com/logo-company.png",
  "@id": "https://yabeshtronic.com",
  "url": "https://yabeshtronic.com",
  "telephone": "+62 895-4107-74936",
  "priceRange": "$$",
  "description": "Pusat penyedia layanan jasa sewa mesin fotocopy berkualitas untuk kebutuhan bisnis, perkantoran, dan perusahaan. Menyediakan penjualan suku cadang (spare parts) lengkap dan layanan servis profesional.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl Raya Serpong Km.7 No. A-388",
    "addressLocality": "Serpong Utara",
    "addressRegion": "Tangerang Selatan, Banten",
    "postalCode": "15326",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.241586,
    "longitude": 106.645714
  },
  "areaServed": ["Tangerang", "Tangerang Selatan", "Jakarta", "Banten", "Jabodetabek"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
