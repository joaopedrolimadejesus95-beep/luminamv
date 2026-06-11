"use client"

import { useState } from "react"
import { Check, Plus, Swords } from "lucide-react"
import { missions as initialMissions, tagStyles, type Mission } from "@/lib/data"
import { BossCard } from "@/components/dashboard/boss-card"
import { cn } from "@/lib/utils"
import { boss } from "@/lib/data"

export function MissionsBoard({
  showBoss = true,
}: {
  showBoss?: boolean
}) {
  const [missions, setMissions] =
    useState<Mission[]>(initialMissions)

  const [showModal, setShowModal] =
    useState(false)

  const [missionTitle, setMissionTitle] =
    useState("")

  const [difficulty, setDifficulty] =
    useState("facil")

  const doneCount =
    missions.filter((m) => m.done).length

  const earnedXp = missions
    .filter((m) => m.done)
    .reduce((sum, m) => sum + m.xp, 0)

  const damagePerMission =
    (100 - boss.hp) / missions.length

  const extraDone =
    missions.filter((m) => m.done).length

  const bossHp = Math.max(
    0,
    Math.round(
      boss.hp -
        (extraDone - 2) *
          damagePerMission *
          2,
    ),
  )

  function concluirMissao(id: string) {
    const mission = missions.find(
      (m) => m.id === id,
    )

    if (!mission) return

    if (mission.done) return

    console.log(
      "Missão concluída:",
      mission.title,
    )

    setMissions((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, done: true }
          : m,
      ),
    )
  }

  function nivelMission() {
    if (difficulty === "facil") {
      return 50
    }

    if (difficulty === "medio") {
      return 100
    }

    if (difficulty === "dificil") {
      return 150
    }

    return 50
  }

  function addMission() {
    if (!missionTitle.trim()) return

    const xp = nivelMission()

    const id = `m${
      missions.length + 1
    }-${Date.now()}`

    setMissions((prev) => [
      ...prev,
      {
        id,
        title: missionTitle,
        description:
          "Toque para concluir e ganhar XP",
        xp,
        done: false,
        tag: "Pessoal",
      },
    ])

    setMissionTitle("")
    setDifficulty("facil")
    setShowModal(false)
  }

  return (
    <div className="space-y-6">
      {showBoss && (
        <BossCard hp={bossHp} />
      )}

      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Swords className="size-5" />
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Missões do dia
              </h2>

              <p className="text-sm text-muted-foreground">
                {doneCount}/
                {missions.length} concluídas ·{" "}
                {earnedXp} XP ganhos
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow-purple"
          >
            <Plus className="size-4" />
            Nova Missão
          </button>
        </div>

        <ul className="space-y-3">
          {missions.map((mission) => (
            <li key={mission.id}>
              <button
                onClick={() =>
                  concluirMissao(
                    mission.id,
                  )
                }
                className={cn(
                  "group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                  mission.done
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-background/40 hover:border-primary/40 hover:bg-background/70",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all",
                    mission.done
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/40 group-hover:border-primary",
                  )}
                >
                  {mission.done && (
                    <Check
                      className="size-4"
                      strokeWidth={3}
                    />
                  )}
                </span>

                <span className="flex-1">
                  <span
                    className={cn(
                      "block font-medium transition-colors",
                      mission.done &&
                        "text-muted-foreground line-through",
                    )}
                  >
                    {mission.title}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {
                      mission.description
                    }
                  </span>
                </span>

                <span className="flex shrink-0 flex-col items-end gap-1.5">
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                      tagStyles[
                        mission.tag
                      ],
                    )}
                  >
                    {mission.tag}
                  </span>

                  <span className="text-xs font-semibold text-primary">
                    +{mission.xp} XP
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <h2 className="mb-5 text-xl font-bold">
              Criar Nova Missão
            </h2>

            <input
              value={missionTitle}
              onChange={(e) =>
                setMissionTitle(
                  e.target.value,
                )
              }
              placeholder="Nome da missão"
              className="mb-4 w-full rounded-xl border border-border bg-background p-3 outline-none"
            />

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value,
                )
              }
              className="mb-5 w-full rounded-xl border border-border bg-background p-3 outline-none"
            >
              <option value="facil">
                Fácil (+50 XP)
              </option>

              <option value="medio">
                Médio (+100 XP)
              </option>

              <option value="dificil">
                Difícil (+150 XP)
              </option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowModal(false)
                  setMissionTitle("")
                  setDifficulty(
                    "facil",
                  )
                }}
                className="flex-1 rounded-xl border border-border py-3"
              >
                Cancelar
              </button>

              <button
                onClick={addMission}
                className="flex-1 rounded-xl bg-gradient-to-r from-primary to-secondary py-3 font-medium text-primary-foreground"
              >
                Criar Missão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}