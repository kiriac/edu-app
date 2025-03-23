import React from "react";
import { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skip Hire | We Want Waste",
  description: "Professional skip hire services for domestic and commercial customers. Fast delivery and competitive prices.",
  keywords: "skip hire, waste management, waste disposal, rubbish removal, commercial skip hire, domestic skip hire",
  authors: [{ name: "We Want Waste", url: "https://wewantwaste.co.uk" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wewantwaste.co.uk",
    title: "Skip Hire | We Want Waste",
    description: "Professional skip hire services for domestic and commercial customers. Fast delivery and competitive prices.",
    siteName: "We Want Waste",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}