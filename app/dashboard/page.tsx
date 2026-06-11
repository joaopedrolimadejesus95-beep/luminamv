import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { LevelCard } from "@/components/dashboard/level-card"
import { StreakCard } from "@/components/dashboard/streak-card"
import { JourneyCard } from "@/components/dashboard/journey-card"
import { AuroraCard } from "@/components/dashboard/aurora-card"
import { MissionsBoard } from "@/components/dashboard/missions-board"

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        greeting="Boa noite, João"
        title="Seu progresso de hoje"
        message="Bem-vindo de volta à sua jornada. Você está mais perto do que imagina de subir de nível."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LevelCard />
        <StreakCard />
      </div>

      <div className="mt-6">
        <JourneyCard />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <MissionsBoard />
        <AuroraCard />
      </div>
    </AppShell>
  )
}
