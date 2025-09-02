<script setup>
import { reactive } from 'vue'
const steps = reactive([
  { icon: '/icon-watch.svg', text: '1. Registra tu inmersión', error: false },
  { icon: '/icon-map.svg', text: '2. Agrega ubicación y detalles', error: false },
  { icon: '/icon-log.svg', text: '3. Analiza tus estadísticas', error: false }
])
</script>

<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-10">Cómo funciona</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div v-for="(step, idx) in steps" :key="idx">
          <div class="mx-auto mb-4 h-12 w-12 flex items-center justify-center">
            <img v-if="!step.error" :src="step.icon" alt="" class="h-12 w-12" @error="step.error = true" />
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="3" />
            </svg>
          </div>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
