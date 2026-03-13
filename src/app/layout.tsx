import type { Metadata } from "next";
import "./globals.css";
import contact from "@/data/contact.json";

export const metadata: Metadata = {
  title: `${contact.name} — Portfolio`,
  description: contact.summary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
