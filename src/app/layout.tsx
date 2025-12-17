import type { Metadata } from "next";
import UnitProvider from "@/components/UnitProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather",
  description: "Know the weather so you can small-talk successfully",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UnitProvider>{children}</UnitProvider>
      </body>
    </html>
  );
}
