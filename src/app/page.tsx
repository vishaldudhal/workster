import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="glass rounded-3xl p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Workster</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">One suite for agencies to run work, clients, and cashflow.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Minimal, glassy, mobile-ready workspace for teams of 10–20. Built with Next.js + Supabase.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white">
              Open app shell
            </Link>
            <Link href="/sign-in" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-slate-200">
              Sign in preview
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
