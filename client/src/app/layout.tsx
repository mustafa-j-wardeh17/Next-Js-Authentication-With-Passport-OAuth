import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import ReduxWrapper from "@/Redux/reduxWrapper";

const inter = Alexandria({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxWrapper>
          {children}
        </ReduxWrapper>
      </body>
    </html>
  );
}