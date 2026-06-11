import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Ambient aurora background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-aurora absolute -left-32 -top-32 size-[28rem] rounded-full bg-primary/25 blur-[120px]" />
        <div
          className="animate-aurora absolute -right-24 top-1/3 size-[26rem] rounded-full bg-secondary/20 blur-[120px]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="animate-aurora absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-accent/15 blur-[120px]"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <Sidebar />

      <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-10">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>

      <MobileNav />
    </div>
  )
}
