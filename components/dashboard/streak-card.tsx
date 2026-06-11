import { Flame } from "lucide-react"
import { user } from "@/lib/data"

export function StreakCard() {
  const days = ["S", "T", "Q", "Q", "S", "S", "D"]

function Streak(){
  const today= new Date()
  

}

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
      <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-destructive/20 blur-3xl" />

      <div className="flex items-center gap-4">
        <div className="animate-flame flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive to-chart-5">
          <Flame className="size-7 text-primary-foreground" fill="currentColor" />
        </div>
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-semibold tracking-tight">{user.streak}</span>
            <span className="text-sm text-muted-foreground">dias</span>
          </div>
          <p className="text-sm text-muted-foreground">Sequência produtiva</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-1.5">
        {days.map((d, i) => {
          const active = i < 5
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-full items-center justify-center rounded-xl text-xs font-medium ${
                  active
                    ? "bg-gradient-to-br from-destructive/30 to-chart-5/30 text-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {active ? <Flame className="size-4 text-destructive" fill="currentColor" /> : d}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
