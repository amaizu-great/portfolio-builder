import "./globals.css";
import type { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Poppins, DM_Sans, Tenor_Sans } from "next/font/google";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

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
      <body className={`${poppins.variable} ${dmSans.variable} ${tenorSans.variable} antialiased font-poppins max-h-svh h-svh ring-0 focus:ring-0 overflow-y-auto scrollbar`} >
        <SidebarProvider className="h-svh" style={ { "--sidebar-width": "calc(var(--spacing) * 72)", "--header-height": "calc(var(--spacing) * 12)", } as React.CSSProperties }>  
          <AppSidebar variant="inset" />
          <SidebarInset className="overflow-y-auto scrollbar">
            <SiteHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
