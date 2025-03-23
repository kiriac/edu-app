import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "../client/src/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skip Hire | We Want Waste",
  description: "Find the perfect skip for your waste management needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}