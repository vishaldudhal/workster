import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-5">
        <section className="glass soft-card overflow-hidden p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-indigo-300" style={{ borderColor: 'var(--line)' }}>
            <Sparkles size={14} /> Workster • Built for 10-20 member agencies
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Run projects, clients, billing, and files in one beautiful workspace.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--muted)' }}>
            Affordable all-in-one business suite inspired by the best — tailored for growing agencies.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-400">
              Enter Workster <ArrowRight size={16} />
            </Link>
            <Link href="/sign-in" className="rounded-2xl border px-5 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>
              Sign in preview
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
