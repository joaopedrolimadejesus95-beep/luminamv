import { achievements, rarityIcon, type Achievement } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Lock } from "lucide-react"

const rarityStyles: Record<Achievement["rarity"], string> = {
  Comum: "from-muted-foreground/30 to-muted-foreground/10 text-muted-foreground border-border",
  Raro: "from-secondary/40 to-secondary/10 text-secondary border-secondary/40",
  Épico: "from-primary/40 to-primary/10 text-primary border-primary/40",
  Lendário: "from-chart-5/50 to-chart-4/20 text-chart-5 border-chart-5/50",
}

export function AchievementsGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? achievements.slice(0, 4) : achievements

  return (
    <div
      className={cn(
        "grid gap-4",
        compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
      )}
    >
      {list.map((a) => {
        const RarityIcon = rarityIcon[a.rarity]
        return (
          <div
            key={a.id}
            className={cn(
              "group relative flex flex-col items-center rounded-2xl border bg-card p-5 text-center transition-all",
              a.unlocked ? "hover:-translate-y-1" : "opacity-60",
              a.unlocked && a.rarity === "Lendário" && "glow-purple",
            )}
          >
            <div
              className={cn(
                "relative flex size-16 items-center justify-center rounded-2xl border bg-gradient-to-br",
                a.unlocked ? rarityStyles[a.rarity] : "from-muted to-muted text-muted-foreground border-border",
              )}
            >
              {a.unlocked ? (
                <a.icon className="size-7" />
              ) : (
                <Lock className="size-6 text-muted-foreground" />
              )}
            </div>

            <h3 className="mt-3 text-sm font-semibold leading-tight text-balance">
              {a.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {a.description}
            </p>

            <span
              className={cn(
                "mt-3 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                a.unlocked ? rarityStyles[a.rarity] : "border-border text-muted-foreground",
              )}
            >
              <RarityIcon className="size-3" />
              {a.rarity}
            </span>
          </div>
        )
      })}
    </div>
  )
}
