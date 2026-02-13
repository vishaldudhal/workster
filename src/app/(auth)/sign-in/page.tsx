import Link from 'next/link'

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="glass w-full max-w-md rounded-2xl p-6">
        <p className="text-sm text-sky-300">Workster • Prototype Mode</p>
        <h1 className="mt-1 text-2xl font-semibold">Enter Demo Workspace</h1>
        <p className="mt-2 text-sm text-slate-300">
          Auth is intentionally disabled for the design prototype sprint.
        </p>

        <Link
          href="/dashboard"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
        >
          Continue to prototype
        </Link>
      </section>
    </main>
  )
}
