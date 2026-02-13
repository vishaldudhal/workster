import { ArrowUpRight, CircleDollarSign, Clock3, FolderKanban, Users2 } from 'lucide-react'

const kpis = [
  { label: 'Active Projects', value: '24', delta: '+4 this week', icon: FolderKanban },
  { label: 'Open Invoices', value: '₹3.2L', delta: '6 pending', icon: CircleDollarSign },
  { label: 'Team Utilization', value: '82%', delta: '+5%', icon: Users2 },
  { label: 'Tracked Hours', value: '186h', delta: 'This week', icon: Clock3 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <section className="glass soft-card p-6 md:p-8">
        <p className="text-sm text-indigo-300">Overview</p>
        <h2 className="mt-1 text-2xl font-semibold md:text-3xl">Good morning, DV 👋</h2>
        <p className="mt-2 inline-flex rounded-full border px-3 py-1 text-xs text-emerald-300" style={{ borderColor: 'var(--line)' }}>
          Live Build Stream: Active
        </p>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
          Here’s your agency health snapshot — projects, cashflow, and workload in one place.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.label} className="glass soft-card kpi p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{item.label}</p>
                <Icon size={17} className="text-indigo-300" />
              </div>
              <p className="mt-4 text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-xs text-emerald-300">{item.delta}</p>
            </article>
          )
        })}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass soft-card p-5">
          <h3 className="text-lg font-semibold">Focus Today</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              'Finalize proposal for Kothavale Hospital redesign',
              'Review 3 invoices due this week',
              'Follow up on 2 client onboarding pending docs',
            ].map((x) => (
              <li key={x} className="flex items-start justify-between rounded-xl border px-3 py-3" style={{ borderColor: 'var(--line)' }}>
                <span>{x}</span>
                <ArrowUpRight size={15} className="text-indigo-300" />
              </li>
            ))}
          </ul>
        </article>

        <article className="glass soft-card p-5">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• Invoice #WS-142 marked as paid</li>
            <li>• New lead added: Astra Medical Supplies</li>
            <li>• Task moved to Review: Landing page revamp</li>
            <li>• File uploaded: brand-assets-v3.zip</li>
          </ul>
        </article>
      </section>
    </div>
  )
}
