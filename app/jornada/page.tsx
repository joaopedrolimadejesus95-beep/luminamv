import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { journeyStages, user } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Check, Lock } from "lucide-react"

export default function JornadaPage() {
  const currentIndex = journeyStages.reduce(
    (acc, stage, i) => (user.level >= stage.minLevel ? i : acc),
    0,
  )

  return (
    <AppShell>
      <PageHeader
        title="Sua Jornada"
        message="Cada nível desbloqueia uma nova fase da sua evolução. Veja o quão longe você já chegou e o que ainda está por vir."
      />

      <div className="relative mx-auto max-w-2xl">
        {/* vertical line */}
        <div className="absolute bottom-6 left-[27px] top-6 w-0.5 bg-border" />
        <div
          className="absolute left-[27px] top-6 w-0.5 bg-gradient-to-b from-primary to-secondary"
          style={{ height: `calc(${(currentIndex / (journeyStages.length - 1)) * 100}% - 1.5rem)` }}
        />

        <ol className="space-y-5">
          {journeyStages.map((stage, i) => {
            const reached = i <= currentIndex
            const isCurrent = i === currentIndex
            const locked = i > currentIndex
            return (
              <li key={stage.name} className="relative flex items-center gap-5">
                <div
                  className={cn(
                    "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 transition-all",
                    reached
                      ? "border-primary bg-card text-primary"
                      : "border-border bg-card text-muted-foreground",
                    isCurrent && "animate-pulse-glow glow-purple",
                  )}
                >
                  <stage.icon className="size-6" />
                </div>

                <div
                  className={cn(
                    "flex flex-1 items-center justify-between rounded-2xl border p-4 transition-all",
                    isCurrent
                      ? "border-primary/40 bg-primary/10"
                      : reached
                        ? "border-border bg-card"
                        : "border-border bg-card/50 opacity-70",
                  )}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{stage.name}</h3>
                      {isCurrent && (
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                          Você está aqui
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Nível {stage.minLevel}+
                    </p>
                  </div>
                  <div className="text-muted-foreground">
                    {locked ? (
                      <Lock className="size-5" />
                    ) : (
                      <Check className="size-5 text-primary" strokeWidth={2.5} />
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </AppShell>
  )
}
