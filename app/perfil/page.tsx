import Image from "next/image"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { AchievementsGrid } from "@/components/achievements-grid"
import { achievements, user } from "@/lib/data"
import { Flame, Gem, Sparkles, Swords } from "lucide-react"

export default function PerfilPage() {
  const unlocked = achievements.filter((a) => a.unlocked).length
  const pct = Math.round((user.xp / user.xpToNext) * 100)

  const stats = [
    { label: "XP total", value: user.totalXp.toLocaleString("pt-BR"), icon: Gem },
    { label: "Missões concluídas", value: user.completedMissions, icon: Swords },
    { label: "Dias de streak", value: user.streak, icon: Flame },
    { label: "Conquistas", value: `${unlocked}/${achievements.length}`, icon: Sparkles },
  ]

  return (
    <AppShell>
      <PageHeader title="Perfil" message="Sua identidade na jornada Lumina." />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="relative">
            <div className="size-24 overflow-hidden rounded-3xl border-2 border-primary/50 glow-purple sm:size-28">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={`Avatar de ${user.name}`}
                width={120}
                height={120}
                className="size-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
              Nv. {user.level}
            </span>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-semibold tracking-tight">{user.name}</h2>
            <p className="text-primary text-glow">{user.title}</p>
            <div className="mx-auto mt-4 max-w-sm sm:mx-0">
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-muted-foreground">Progresso de nível</span>
                <span className="font-medium">{pct}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="animate-bar h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <s.icon className="size-5 text-primary" />
            <p className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">Conquistas desbloqueadas</h2>
        <AchievementsGrid />
      </div>
    </AppShell>
  )
}
