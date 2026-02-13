const columns = [
  {
    title: 'Todo',
    items: ['Landing page revision', 'Client portal checklist'],
  },
  {
    title: 'In Progress',
    items: ['AMC reminder engine', 'Invoice template revamp'],
  },
  {
    title: 'Review',
    items: ['MH10 proposal v2'],
  },
  {
    title: 'Done',
    items: ['Discord deployment updates'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <section className="glass soft-card p-5 md:p-6">
        <h2 className="text-2xl font-semibold">Projects • Kanban Prototype</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
          Fast visual planning flow for small teams.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        {columns.map((col) => (
          <article key={col.title} className="glass soft-card p-4">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>{col.title}</h3>
            <div className="mt-3 space-y-2">
              {col.items.map((item) => (
                <div key={item} className="rounded-xl border p-3 text-sm" style={{ borderColor: 'var(--line)' }}>
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
