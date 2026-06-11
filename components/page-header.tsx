export function PageHeader({
  greeting,
  title,
  message,
}: {
  greeting?: string
  title: string
  message?: string
}) {
  return (
    <header className="mb-8">
      {greeting && (
        <p className="mb-1 text-sm font-medium text-primary text-glow">{greeting}</p>
      )}
      <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {title}
      </h1>
      {message && (
        <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {message}
        </p>
      )}
    </header>
  )
}
