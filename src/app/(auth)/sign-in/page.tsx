import { signInAction } from './actions'

const errorMap: Record<string, string> = {
  missing_credentials: 'Please enter email and password.',
  invalid_credentials: 'Invalid email/password. Please try again.',
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  const message = error ? errorMap[error] ?? 'Unable to sign in.' : null

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="glass w-full max-w-md rounded-2xl p-6">
        <p className="text-sm text-sky-300">Workster</p>
        <h1 className="mt-1 text-2xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm text-slate-300">Use your workspace credentials to continue.</p>

        <form action={signInAction} className="mt-6 space-y-3">
          <input
            name="email"
            type="email"
            placeholder="you@agency.com"
            className="w-full rounded-xl border bg-transparent px-3 py-2 text-sm"
            style={{ borderColor: 'var(--line)' }}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border bg-transparent px-3 py-2 text-sm"
            style={{ borderColor: 'var(--line)' }}
            required
          />
          <button type="submit" className="w-full rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400">
            Sign in
          </button>
        </form>

        {message ? <p className="mt-3 text-sm text-rose-300">{message}</p> : null}
      </section>
    </main>
  )
}
