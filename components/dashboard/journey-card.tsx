import { journeyStages, user } from "@/lib/data"
import { cn } from "@/lib/utils"

export function JourneyCard() {
  const currentIndex = journeyStages.reduce(
    (acc, stage, i) => (user.level >= stage.minLevel ? i : acc),
    0,
  )

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Sua Jornada</h2>
          <p className="text-sm text-muted-foreground">Linha de evolução pessoal</p>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          {journeyStages[currentIndex].name}
        </span>
      </div>

      <div className="relative flex items-center justify-between">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-border" />
        <div
          className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${(currentIndex / (journeyStages.length - 1)) * 100}%` }}
        />

        {journeyStages.map((stage, i) => {
          const reached = i <= currentIndex
          const isCurrent = i === currentIndex
          return (
            <div key={stage.name} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border-2 transition-all",
                  reached
                    ? "border-primary bg-card text-primary"
                    : "border-border bg-card text-muted-foreground",
                  isCurrent && "animate-pulse-glow glow-purple",
                )}
              >
                <stage.icon className="size-5" />
              </div>
              <span
                className={cn(
                  "max-w-[3.5rem] text-center text-[10px] font-medium leading-tight sm:text-xs",
                  reached ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {stage.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
