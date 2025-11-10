import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The News Project",
  description:
    "Noticias actualizadas del mundo, negocios, tecnología, entretenimiento, salud y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#faf9f7] text-gray-800 font-sans">{children}</body>
    </html>
  );
}
