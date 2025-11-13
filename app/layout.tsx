import "./globals.css";
import type { Metadata } from "next";
import { Poppins, DM_Sans, Tenor_Sans } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style:  "normal",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-tenorsans",
  subsets: ["latin"],
  style:  "normal",
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Portfolio Bulder",
  description: "Your personal portfolio builder Editor",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable} ${tenorSans.variable} antialiased font-poppins max-h-svh h-svh overflow-y-auto scrollbar`} >
        {children}
      </body>
    </html>
  );
}
