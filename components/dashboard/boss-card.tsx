"use client"

import { boss } from "@/lib/data"
import { Heart } from "lucide-react"

export function BossCard({ hp = boss.hp }: { hp?: number }) {
  const BossIcon = boss.icon

  return (
    <div className="relative overflow-hidden rounded-3xl border border-destructive/30 bg-gradient-to-br from-destructive/15 via-card to-card p-6">
      <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-destructive/25 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-2xl border border-destructive/40 bg-destructive/20 text-destructive">
            <BossIcon className="size-8" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-destructive">
              {boss.subtitle}
            </span>
            <h2 className="text-xl font-semibold tracking-tight">{boss.name}</h2>
          </div>
        </div>
        <span className="hidden rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive sm:inline">
          Boss Fight
        </span>
      </div>

      <div className="relative mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Heart className="size-4 text-destructive" fill="currentColor" />
            Vida do Boss
          </span>
          <span className="font-medium text-foreground">{hp}%</span>
        </div>
        <div className="h-4 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-destructive to-chart-4 transition-[width] duration-700 ease-out"
            style={{ width: `${hp}%` }}
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Cada missão concluída causa dano ao boss. Continue avançando para derrotá-lo!
        </p>
      </div>
    </div>
  )
}
