"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  function entrar(e: React.FormEvent) {
    e.preventDefault()

    // depois você valida usuário aqui

    router.push("/dashboard")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Lumina ✨
          </h1>

          <p className="mt-3 text-muted-foreground">
            Continue sua jornada de evolução.
          </p>
        </div>

        <form onSubmit={entrar} className="space-y-4">

          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Senha
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-medium text-white transition hover:scale-[1.02]"
          >
            Entrar
          </button>

          <button
            type="button"
            className="w-full rounded-xl border border-border py-3 font-medium transition hover:bg-muted"
          >
            Continuar com Google
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Não possui conta?{" "}
          <Link
            href="/cadastro"
            className="font-semibold text-primary"
          >
            Criar conta
          </Link>
        </p>

      </div>
    </main>
  )
}