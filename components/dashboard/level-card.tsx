import { Sparkles } from "lucide-react"
import { user } from "@/lib/data"


export function LevelCard() {
  const pct = Math.round((user.xp / user.xpToNext) * 100)

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 blur-3xl" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Nível atual</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-tight text-glow">
              {user.level}
            </span>
            <span className="text-sm font-medium text-primary">{user.title}</span>
          </div>
        </div>
        <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-purple">
          <Sparkles className="size-6 text-primary-foreground" />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">XP</span>
          <span className="font-medium text-foreground">
            {user.xp.toLocaleString("pt-BR")} / {user.xpToNext.toLocaleString("pt-BR")}
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="animate-bar h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Faltam{" "}
          <span className="font-medium text-foreground">
            {(user.xpToNext - user.xp).toLocaleString("pt-BR")} XP
          </span>{" "}
          para o próximo nível
        </p>
      </div>
    </div>
  )
}
