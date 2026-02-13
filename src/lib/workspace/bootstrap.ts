import { supabaseAdmin } from '@/lib/supabase/admin'

export async function ensureWorkspaceForUser(userId: string, email?: string | null) {
  const { data: existing, error: existingError } = await supabaseAdmin
    .from('workspace_members')
    .select('workspace_id, role')
    .eq('user_id', userId)
    .limit(1)
    .maybeSingle()

  if (!existingError && existing?.workspace_id) return existing.workspace_id

  const fallbackName = email?.split('@')[0] || 'Workster Team'

  const { data: workspace, error: wsError } = await supabaseAdmin
    .from('workspaces')
    .insert({ name: `${fallbackName}'s Workspace` })
    .select('id')
    .single()

  if (wsError || !workspace?.id) throw wsError ?? new Error('Failed to create workspace')

  const { error: memberError } = await supabaseAdmin
    .from('workspace_members')
    .insert({ workspace_id: workspace.id, user_id: userId, role: 'owner' })

  if (memberError) throw memberError

  return workspace.id
}
