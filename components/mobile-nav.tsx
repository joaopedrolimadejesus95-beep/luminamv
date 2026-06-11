"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Route, Swords, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [ 
  { href: "/dashboard", label: "Início", icon: LayoutDashboard },
  { href: "/jornada", label: "Jornada", icon: Route },
  { href: "/missoes", label: "Missões", icon: Swords },
  { href: "/perfil", label: "Perfil", icon: User },
  { href: "/configuracoes", label: "Ajustes", icon: Settings },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-border bg-sidebar/95 px-2 py-2 backdrop-blur-md lg:hidden">
      {navItems.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
              active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
