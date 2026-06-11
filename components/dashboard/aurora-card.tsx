import { Sparkles } from "lucide-react"
import { auroraMessages } from "@/lib/data"

export function AuroraCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/15 via-card to-primary/10 p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-aurora absolute -right-6 top-0 size-40 rounded-full bg-secondary/30 blur-3xl" />
        <div
          className="animate-aurora absolute bottom-0 left-10 size-32 rounded-full bg-primary/30 blur-3xl"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="animate-float relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary glow-blue">
          <Sparkles className="size-7 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Aurora</h2>
            <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-medium text-secondary">
              Assistente
            </span>
          </div>
          <p className="mt-2 text-pretty leading-relaxed text-foreground/90">
            {auroraMessages[0]}
          </p>
        </div>
      </div>

      <div className="relative mt-5 space-y-2">
        {auroraMessages.slice(1).map((msg, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-muted-foreground"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}
