"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Bell, Moon, Volume2, Sparkles, Shield, Globe, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <button
      onClick={() => setOn((v) => !v)}
      role="switch"
      aria-checked={on}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        on ? "bg-gradient-to-r from-primary to-secondary" : "bg-muted",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 size-5 rounded-full bg-background transition-transform",
          on ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  )
}

export default function ConfiguracoesPage() {
  const sections = [
    {
      title: "Preferências",
      items: [
        { icon: Bell, label: "Notificações de missões", desc: "Lembretes diários para manter o foco", toggle: true, on: true },
        { icon: Moon, label: "Modo escuro", desc: "Tema visual da plataforma", toggle: true, on: true },
        { icon: Volume2, label: "Efeitos sonoros", desc: "Sons ao concluir missões e subir de nível", toggle: true, on: false },
        { icon: Sparkles, label: "Dicas da Aurora", desc: "Mensagens motivacionais personalizadas", toggle: true, on: true },
      ],
    },
    {
      title: "Conta",
      items: [
        { icon: Shield, label: "Privacidade e segurança", desc: "Gerencie seus dados e sessões", toggle: false },
        { icon: Globe, label: "Idioma", desc: "Português (Brasil)", toggle: false },
      ],
    },
  ]

  return (
    <AppShell>
      <PageHeader title="Configurações" message="Personalize sua experiência na Lumina." />

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {section.title}
            </h2>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              {section.items.map((item, i) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-4 p-4 sm:p-5",
                    i !== section.items.length - 1 && "border-b border-border",
                  )}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {item.toggle ? (
                    <Toggle defaultOn={item.on} />
                  ) : (
                    <ChevronRight className="size-5 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <button className="w-full rounded-2xl border border-destructive/30 bg-destructive/10 py-3 text-sm font-medium text-destructive transition-colors hover:bg-destructive/20">
          Encerrar sessão
        </button>
      </div>
    </AppShell>
  )
}
