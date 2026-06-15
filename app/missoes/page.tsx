"use client"

import { useState } from "react"
import { user } from "@/lib/data"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { MissionsBoard } from "@/components/dashboard/missions-board"

export default function MissoesPage() {
  const [userData, setUserData] = useState(user)

  return (
    <AppShell>
      <PageHeader
        title="Missões"
        message="Conclua missões para ganhar XP, manter sua sequência viva e causar dano ao boss do semestre."
      />

      <MissionsBoard
        userData={userData}
        setUserData={setUserData}
      />
    </AppShell>
  )
}