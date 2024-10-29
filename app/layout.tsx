import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Paul",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-neutral-800 dark:bg-neutral-200">
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
