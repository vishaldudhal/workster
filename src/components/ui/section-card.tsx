export function SectionCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <article className="glass rounded-2xl p-5 md:p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children ? <div className="mt-3 text-sm text-slate-300">{children}</div> : null}
    </article>
  )
}
