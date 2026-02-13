'use client'

import { useMemo, useState } from 'react'

type Client = {
  name: string
  company: string
  email: string
  status: 'Onboarding' | 'Active' | 'Pending'
}

const seed: Client[] = [
  { name: 'Shakti Dhende', company: 'MH10 Group', email: 'shaktidhende@gmail.com', status: 'Active' },
  { name: 'Swapnil D', company: 'Stellax Enterprises', email: 'info@stellaxenterprises.com', status: 'Onboarding' },
]

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(seed)
  const [form, setForm] = useState<Client>({ name: '', company: '', email: '', status: 'Pending' })

  const canAdd = useMemo(() => form.name && form.company && form.email, [form])

  function addClient() {
    if (!canAdd) return
    setClients((prev) => [{ ...form }, ...prev])
    setForm({ name: '', company: '', email: '', status: 'Pending' })
  }

  return (
    <div className="space-y-4">
      <section className="glass soft-card p-5 md:p-6">
        <h2 className="text-2xl font-semibold">Clients</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
          Prototype: add and view client records quickly.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <input className="rounded-xl border bg-transparent px-3 py-2 text-sm" style={{ borderColor: 'var(--line)' }} placeholder="Client name"
            value={form.name} onChange={(e)=>setForm((f)=>({...f,name:e.target.value}))}/>
          <input className="rounded-xl border bg-transparent px-3 py-2 text-sm" style={{ borderColor: 'var(--line)' }} placeholder="Company"
            value={form.company} onChange={(e)=>setForm((f)=>({...f,company:e.target.value}))}/>
          <input className="rounded-xl border bg-transparent px-3 py-2 text-sm" style={{ borderColor: 'var(--line)' }} placeholder="Email"
            value={form.email} onChange={(e)=>setForm((f)=>({...f,email:e.target.value}))}/>
          <button onClick={addClient} disabled={!canAdd} className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-40">
            Add client
          </button>
        </div>
      </section>

      <section className="glass soft-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c, i) => (
              <tr key={`${c.email}-${i}`} className="border-b last:border-0" style={{ borderColor: 'var(--line)' }}>
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.company}</td>
                <td className="px-4 py-3">{c.email}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full border px-2 py-1 text-xs" style={{ borderColor: 'var(--line)' }}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
