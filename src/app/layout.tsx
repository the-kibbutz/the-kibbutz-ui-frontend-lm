import type { Metadata } from "next";
// import "./globals.css"; // We might want to keep or remove globals.css depending on MUI interaction. Usually MUI replaces it.
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "The Kibbutz Showcase",
  description: "UI Showcase for The Kibbutz Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
