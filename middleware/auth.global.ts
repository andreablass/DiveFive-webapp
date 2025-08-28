export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabase()
  const { data } = await supabase.auth.getSession()
  if (!data.session && to.path.startsWith('/dashboard')) {
    return navigateTo('/login')
  }
})
