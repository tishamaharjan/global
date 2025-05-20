import "@workspace/ui/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Square I.T. | Bringing Your Vision to Life",
  description:
    "We turn ideas into impactful digital experiences with innovation and precision",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
