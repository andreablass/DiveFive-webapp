<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl mb-4">Login</h1>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block text-sm">Email</label>
        <input v-model="email" type="email" class="input" required />
      </div>
      <div>
        <label class="block text-sm">Password</label>
        <input v-model="password" type="password" class="input" required />
      </div>
      <div v-if="isSignup">
        <label class="block text-sm">Handle</label>
        <input v-model="handle" type="text" class="input" required />
      </div>
      <button type="submit" class="btn w-full">{{ isSignup ? 'Sign up' : 'Sign in' }}</button>
    </form>
    <button class="mt-4 text-sm text-blue-500" @click="isSignup = !isSignup">
      {{ isSignup ? 'Have an account? Sign in' : 'New here? Sign up' }}
    </button>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabase()
const router = useRouter()
const email = ref('')
const password = ref('')
const handle = ref('')
const isSignup = ref(false)

const onSubmit = async () => {
  if (isSignup.value) {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (!error && data.user) {
      await $fetch('/api/init-profile', {
        method: 'POST',
        body: { userId: data.user.id, handle: handle.value }
      })
      router.push('/dashboard')
    }
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (!error) {
      router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.input {
  @apply w-full border p-2 rounded;
}
.btn {
  @apply bg-blue-600 text-white py-2 px-4 rounded;
}
</style>
