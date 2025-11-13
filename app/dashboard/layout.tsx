import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"; 

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <SidebarProvider className="h-svh" style={ { "--sidebar-width": "calc(var(--spacing) * 72)", "--header-height": "calc(var(--spacing) * 12)", } as React.CSSProperties }>  
      <AppSidebar variant="sidebar" />
      <SidebarInset className="overflow-y-auto scrollbar">
        {children}
      </SidebarInset>
    </SidebarProvider> 
  );
}
