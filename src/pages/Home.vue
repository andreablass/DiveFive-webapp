<script setup>
import Hero from '@/components/Hero.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import Steps from '@/components/Steps.vue'
import ScreenshotGrid from '@/components/ScreenshotGrid.vue'

const benefits = [
  { title: 'Log your dives', description: 'Keep a secure, organized record of every dive.', icon: '/icon-watch.svg' },
  { title: 'Explore new sites', description: 'Interactive maps to plan and discover locations.', icon: '/icon-map.svg' },
  { title: 'Share with the community', description: 'Connect with other divers and share your adventures.', icon: '/icon-log.svg' }
]

const features = [
  'Import dive workouts from HealthKit',
  'Import UDDF files',
  'Track dive sites and locations',
  'Create and log pre-dive plans',
  'Notice trends in performance and enjoyment'
]
</script>

<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Benefits -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <FeatureCard v-for="(b, idx) in benefits" :key="idx" v-bind="b" />
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-10">Features</h2>
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
