import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import { Wrapper } from "@/app/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "KonasEdu | Educational platform",
  description: "The educational platform by Konasicode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
