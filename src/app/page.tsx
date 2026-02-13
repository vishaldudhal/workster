import Link from 'next/link'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const pricing = [
  {
    name: 'Starter',
    price: '₹1,499',
    desc: 'For solo founders and tiny teams',
    points: ['Up to 5 users', 'Projects + CRM + Invoices', 'Client portal basics'],
  },
  {
    name: 'Growth',
    price: '₹4,999',
    desc: 'Best for agencies with 10-20 members',
    points: ['Up to 20 users', 'Time tracking + templates', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    desc: 'For larger teams and advanced ops',
    points: ['20+ users', 'Advanced automations', 'Custom onboarding'],
  },
]

const faq = [
  {
    q: 'Who is Workster for?',
    a: 'Small service businesses and agencies that want CRM, projects, billing, client portal, and files in one place.',
  },
  {
    q: 'Can clients track project/payment status?',
    a: 'Yes. Client portal is part of the core experience, with project and billing visibility.',
  },
  {
    q: 'Is Workster mobile-friendly?',
    a: 'Yes. We are designing mobile-first flows with bottom navigation and simple, fast interactions.',
  },
]

const comparison = [
  ['Affordable for India-first agencies', '✅', '⚠️', '⚠️'],
  ['All-in-one (CRM + PM + Billing + Portal)', '✅', '✅', '✅'],
  ['Designed for 10-20 member teams', '✅', '⚠️', '⚠️'],
  ['Simple onboarding and low complexity', '✅', '⚠️', '⚠️'],
]

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="glass soft-card overflow-hidden p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-indigo-300" style={{ borderColor: 'var(--line)' }}>
            <Sparkles size={14} /> Workster • Built for 10-20 member agencies
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Run projects, clients, billing, and files in one beautiful workspace.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--muted)' }}>
            Affordable all-in-one business suite inspired by major platforms, but optimized for small agencies.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-400">
              View Prototype <ArrowRight size={16} />
            </Link>
            <Link href="#pricing" className="rounded-2xl border px-5 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>
              See pricing
            </Link>
          </div>
        </section>

        <section id="pricing" className="grid gap-4 md:grid-cols-3">
          {pricing.map((p) => (
            <article key={p.name} className={`glass soft-card p-6 ${p.highlight ? 'kpi' : ''}`}>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>{p.name}</p>
              <p className="mt-1 text-3xl font-semibold">{p.price}</p>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check size={14} className="text-emerald-400" />{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="glass soft-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Why Workster over major tools?</h2>
          <div className="mt-4 overflow-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-left" style={{ color: 'var(--muted)' }}>
                  <th className="py-2">Feature</th>
                  <th>Workster</th>
                  <th>Plutio</th>
                  <th>OneSuite</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r[0]} className="border-t" style={{ borderColor: 'var(--line)' }}>
                    <td className="py-3">{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass soft-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            {faq.map((x) => (
              <article key={x.q} className="rounded-xl border p-4" style={{ borderColor: 'var(--line)' }}>
                <h3 className="font-medium">{x.q}</h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{x.a}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
