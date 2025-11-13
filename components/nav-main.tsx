"use client"

import Link from "next/link";
import { NavItem } from "@/types/nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconDashboard } from "@tabler/icons-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";




const NavMain = ({ items }: { items: NavItem[] }) => {
  const path = usePathname()
  const [ pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(path)
  }, [path]);
  
  const EachNavItem  = ({ item }: { item: NavItem }) => {
    return (
      <SidebarMenuItem>
        <Link href={item.url}>
          <SidebarMenuButton tooltip={item.title} className={`${pathname.startsWith(item.url) ? "bg-Black text-white" : "text-Black"}  hover:bg-Black/80 hover:text-white transition-colors min-w-8 duration-300 cursor-pointer`}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard">
              <SidebarMenuButton tooltip="Dashboard" className={`${pathname === "/dashboard" ? "bg-Black text-white" : "text-Black"}  hover:bg-Black/80 hover:text-white transition-colors min-w-8 duration-300 cursor-pointer`}>
                <IconDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          {items.map((item, idx) => <EachNavItem item={item} key={idx} />)}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
export default NavMain
