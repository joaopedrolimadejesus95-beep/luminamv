"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Route, Swords, User, Settings, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/jornada", label: "Jornada", icon: Route },
  { href: "/missoes", label: "Missões", icon: Swords },
  { href: "/perfil", label: "Perfil", icon: User },
  { href: "/configuracoes", label: "Configurações", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex">
      <Link href="/dashboard" className="mb-10 flex items-center gap-3 px-2">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-purple">
          <Sparkles className="size-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-semibold tracking-tight text-glow">Lumina</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground glow-purple"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground",
              )}
            >
              <item.icon
                className={cn("size-5 transition-colors", active ? "text-primary" : "")}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-6 rounded-2xl border border-sidebar-border bg-gradient-to-br from-primary/15 to-secondary/10 p-4">
        <p className="text-xs font-medium text-foreground">Nível 12 — Explorador</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: "71%" }} />
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">2.840 / 4.000 XP</p>
      </div>
    </aside>
  )
}
