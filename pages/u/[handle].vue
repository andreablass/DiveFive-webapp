<template>
  <div class="p-4">
    <h1 class="text-2xl">@{{ profile?.handle }}</h1>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabase()
const route = useRoute()
const { data: profile } = await supabase
  .from('profiles')
  .select('handle')
  .eq('handle', route.params.handle as string)
  .single()
</script>
