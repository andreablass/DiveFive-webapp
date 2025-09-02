<script setup>
import Hero from '@/components/Hero.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import Steps from '@/components/Steps.vue'
import ScreenshotGrid from '@/components/ScreenshotGrid.vue'

const benefits = [
  { title: 'Registra tus inmersiones', description: 'Mantén un registro seguro y organizado de cada buceo.', icon: '/icon-watch.svg' },
  { title: 'Explora nuevos sitios', description: 'Mapas interactivos para planear y descubrir lugares.', icon: '/icon-map.svg' },
  { title: 'Comparte con la comunidad', description: 'Conecta con otros buzos y comparte tus aventuras.', icon: '/icon-log.svg' }
]

const features = ['HealthKit', 'UDDF', 'Mapas de sitios', 'Planner', 'Estadísticas']
</script>

<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Beneficios -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <FeatureCard v-for="(b, idx) in benefits" :key="idx" v-bind="b" />
      </div>
    </section>

    <!-- Funciones -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-10">Funciones</h2>
        <ul class="grid md:grid-cols-2 gap-6">
          <li v-for="f in features" :key="f" class="p-4 border rounded">
            {{ f }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Pasos -->
    <Steps />

    <!-- Screenshots -->
    <ScreenshotGrid />
  </div>
</template>
