export default defineEventHandler(async (event) => {
  const supabase = useSupabase()
  const body = await readBody<{ userId: string; handle: string }>(event)
  const { error } = await supabase.from('profiles').insert({
    id: body.userId,
    handle: body.handle
  })
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  return { ok: true }
})
