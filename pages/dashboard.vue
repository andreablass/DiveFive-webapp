<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Dashboard</h1>
    <p v-if="profile">Welcome {{ profile.handle }}</p>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabase()
const router = useRouter()
const { data: userData } = await supabase.auth.getUser()
const { data: profile } = await supabase
  .from('profiles')
  .select('handle')
  .eq('id', userData.user?.id)
  .single()

const logout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}
</script>

<style scoped>
.btn {
  @apply bg-gray-800 text-white py-2 px-4 rounded;
}
</style>
