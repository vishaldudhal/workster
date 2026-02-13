import Link from 'next/link'

const nav = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/clients', label: 'Clients' },
  { href: '/projects', label: 'Projects' },
  { href: '/billing', label: 'Billing' },
  { href: '/inbox', label: 'Inbox' },
  { href: '/space', label: 'Space' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-[280px_1fr]">
        <aside className="glass hidden rounded-2xl p-5 md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">Workster</p>
          <h1 className="mt-2 text-2xl font-semibold">Agency Suite</h1>
          <nav className="mt-6 space-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="space-y-4">{children}</section>
      </div>

      <nav className="glass fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-2xl px-4 py-2 md:hidden">
        {nav.slice(0, 5).map((item) => (
          <Link key={item.href} href={item.href} className="rounded-lg px-2 py-1 text-xs text-slate-200">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
