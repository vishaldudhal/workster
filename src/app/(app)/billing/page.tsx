const invoices = [
  { id: 'WS-142', client: 'MH10 Group', amount: '₹48,000', status: 'Pending' },
  { id: 'WS-139', client: 'Stellax', amount: '₹22,000', status: 'Paid' },
  { id: 'WS-135', client: 'Kothavale', amount: '₹31,500', status: 'Overdue' },
]

export default function BillingPage() {
  return (
    <div className="space-y-4">
      <section className="glass soft-card p-5 md:p-6">
        <h2 className="text-2xl font-semibold">Billing Prototype</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
          Proposal → Invoice → Payment lifecycle for agency cashflow.
        </p>
      </section>

      <section className="glass soft-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
              <th className="px-4 py-3 text-left">Invoice</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-b last:border-0" style={{ borderColor: 'var(--line)' }}>
                <td className="px-4 py-3">{i.id}</td>
                <td className="px-4 py-3">{i.client}</td>
                <td className="px-4 py-3">{i.amount}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full border px-2 py-1 text-xs" style={{ borderColor: 'var(--line)' }}>{i.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
