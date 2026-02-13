import Link from 'next/link'
import { Bell, BriefcaseBusiness, FileText, FolderKanban, LayoutDashboard, MessageSquare, Search } from 'lucide-react'

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/clients', label: 'Clients', icon: BriefcaseBusiness },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/billing', label: 'Billing', icon: FileText },
  { href: '/inbox', label: 'Inbox', icon: MessageSquare },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-3 md:p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-[300px_1fr]">
        <aside className="glass soft-card hidden p-5 md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">Workster</p>
          <h1 className="mt-2 text-2xl font-semibold">Agency Suite</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Premium ops for small agencies</p>

          <nav className="mt-7 space-y-2">
            {nav.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                    idx === 0 ? 'kpi text-indigo-300' : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={17} />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <section className="space-y-4">
          <header className="glass soft-card flex items-center justify-between p-4 md:p-5">
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
              <Search size={16} /> Search clients, projects, invoices...
            </div>
            <button className="rounded-xl border p-2" style={{ borderColor: 'var(--line)' }}>
              <Bell size={16} />
            </button>
          </header>
          {children}
        </section>
      </div>

      <nav className="glass fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-2xl px-3 py-2 md:hidden">
        {nav.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-slate-200">
              <Icon size={15} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
