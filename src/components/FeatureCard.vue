<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
  description: String,
  icon: String
})
const errored = ref(false)
</script>

<template>
  <div class="text-center p-4 rounded bg-white shadow">
    <div class="mx-auto mb-4 h-12 w-12 flex items-center justify-center">
      <img v-if="!errored" :src="icon" alt="" class="h-12 w-12" @error="errored = true" />
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-12 w-12 text-cyan-400">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
    <h3 class="font-semibold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
