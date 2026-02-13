const desktopNav = ['Dashboard', 'Clients', 'Projects', 'Billing', 'Inbox', 'Space']
const mobileNav = ['Home', 'Projects', 'Invoices', 'Inbox', 'More']

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr]">
          <aside className="glass hidden rounded-2xl p-5 md:block">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">Workster</p>
            <h1 className="mt-2 text-2xl font-semibold">Agency Suite</h1>
            <p className="mt-1 text-sm text-slate-400">Dev foundation ready</p>
            <nav className="mt-6 space-y-2">
              {desktopNav.map((item, idx) => (
                <button
                  key={item}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${idx === 0 ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-white/10'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <section className="space-y-4">
            <header className="glass rounded-2xl p-5 md:p-6">
              <p className="text-sm text-sky-300">Build in progress</p>
              <h2 className="mt-1 text-2xl font-semibold md:text-3xl">Next.js + Supabase dev environment configured</h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Brand locked (minimal glassy), roomy desktop sidebar, mobile-first ergonomics with bottom tabs.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="glass rounded-2xl p-5">
                <h3 className="text-lg font-semibold">Immediate Next</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li>Auth + workspace bootstrap</li>
                  <li>Supabase migration + RLS baseline</li>
                  <li>Module shells (Projects, Clients, Billing)</li>
                </ul>
              </article>
              <article className="glass rounded-2xl p-5">
                <h3 className="text-lg font-semibold">v1 Modules</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  <li>Project management + time tracking</li>
                  <li>Client portal + payments visibility</li>
                  <li>Proposals, contracts, invoices</li>
                  <li>Inbox/messages + project files</li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>

      <nav className="glass fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-2xl px-4 py-2 md:hidden">
        {mobileNav.map((item, idx) => (
          <button key={item} className={`rounded-lg px-2 py-1 text-xs ${idx === 0 ? 'text-sky-300' : 'text-slate-300'}`}>
            {item}
          </button>
        ))}
      </nav>
    </main>
  )
}
