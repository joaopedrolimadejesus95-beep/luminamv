"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CadastroPage() {
  const router = useRouter()

  function cadastrar(e: React.FormEvent) {
    e.preventDefault()

    // depois salva no banco

    router.push("/login")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">

      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Criar Conta ✨
          </h1>

          <p className="mt-3 text-muted-foreground">
            Comece sua jornada no Lumina.
          </p>
        </div>

        <form onSubmit={cadastrar} className="space-y-4">

          <input
            type="text"
            placeholder="Nome"
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-medium text-white"
          >
            Criar Conta
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Já possui conta?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary"
          >
            Entrar
          </Link>
        </p>

      </div>

    </main>
  )
}