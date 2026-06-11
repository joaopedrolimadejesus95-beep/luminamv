import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { MissionsBoard } from "@/components/dashboard/missions-board"

export default function MissoesPage() {
  return (
    <AppShell>
      <PageHeader
        title="Missões"
        message="Conclua missões para ganhar XP, manter sua sequência viva e causar dano ao boss do semestre."
      />
      <MissionsBoard />
    </AppShell>
  )
}
