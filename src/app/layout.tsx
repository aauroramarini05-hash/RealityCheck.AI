import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealityCheck AI",
  description: "Validate and optimize YouTube ideas with AI-grade analysis."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
