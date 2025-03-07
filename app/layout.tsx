import type { Metadata } from "next";
import { IBMPlex } from "./ui/font";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Intellicaxt",
  description: "AI SaaS Platform",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${IBMPlex} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
