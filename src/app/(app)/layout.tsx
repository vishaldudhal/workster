import { redirect } from 'next/navigation'
import { AppShell } from '@/components/layout/app-shell'
import { createClient } from '@/lib/supabase/server'
import { ensureWorkspaceForUser } from '@/lib/workspace/bootstrap'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/sign-in')

  // Auto bootstrap first workspace for new users
  try {
    await ensureWorkspaceForUser(user.id, user.email)
  } catch {
    // schema might not be applied yet; continue without hard-failing UI
  }

  return <AppShell>{children}</AppShell>
}
