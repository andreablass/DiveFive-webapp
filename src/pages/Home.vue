<script setup>
import Hero from "@/components/Hero.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import Steps from "@/components/Steps.vue";
import ScreenshotGrid from "@/components/ScreenshotGrid.vue";
// Opcional: si usas Tailwind v3, recuerda importar tu CSS en main.js

const benefits = [
  { title: "Log your dives", description: "Keep a secure, organized record of every dive.", icon: "/icon-watch.svg" },
  { title: "Explore new sites", description: "Interactive maps to plan and discover locations.", icon: "/icon-map.svg" },
  { title: "Share with the community", description: "Connect with other divers and share your adventures.", icon: "/icon-log.svg" },
];

const features = [
  "Import dive workouts from HealthKit",
  "Import UDDF files",
  "Track dive sites and locations",
  "Create and log pre-dive plans",
  "Notice trends in performance and enjoyment",
];

// ✅ Declarar Icon como componente local en <script setup>
import { defineComponent } from "vue";
const Icon = defineComponent({
  props: { name: { type: String, required: true } },
  // SVGs inline para no depender de binarios
  template: `
    <svg v-if="name==='watch'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9 2h6l1 3h2v14h-2l-1 3H9l-1-3H6V5h2l1-3Zm3 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
    <svg v-else-if="name==='map'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Zm0 2.62v12.76l6 1.99V7.62L9 5.62Z"/></svg>
    <svg v-else-if="name==='log'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4a2 2 0 0 0-2 2v13h2l2-1 2 1 2-1 2 1 2-1 2 1h2V6a2 2 0 0 0-2-2H6Zm2 4h8v2H8V8Zm0 4h8v2H8v-2Z"/></svg>
    <svg v-else-if="name==='stats'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 20h16v-2H4v2Zm2-4h3V7H6v9Zm5 0h3V4h-3v12Zm5 0h3V10h-3v6Z"/></svg>
  `,
});
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
<section class="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
  <div class="max-w-6xl mx-auto px-6">
    <!-- Headline -->
    <h2 class="text-4xl md:text-5xl font-extrabold text-center tracking-tight text-gray-900 dark:text-gray-100">
      Your digital buddy underwater
    </h2>
    <p class="mt-4 text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      DiveFive turns every dive into insights you can relive, analyze, and share.
    </p>

    <!-- Feature list -->
<ul class="mt-16 grid md:grid-cols-2 gap-12">
  <li v-for="(f, idx) in [
      { title: 'Register your dives',     icon: 'log',  desc: 'Depth, time, gear and notes — logged in seconds.' },
      { title: 'Import from Apple Watch', icon: 'sync', desc: 'Sync HealthKit data for accurate, automatic records.' },
      { title: 'Map your favorite sites', icon: 'map',  desc: 'Pin dive spots, review conditions and plan with confidence.' },
      { title: 'Analyze & improve',       icon: 'stats',desc: 'Spot patterns in your dives and grow as a diver.' },
    ]"
    :key="idx"
    class="group flex items-start gap-6"
  >
    <div
      class="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-xl
             bg-gradient-to-b from-cyan-80 to-white dark:from-cyan-900/40 dark:to-cyan-800/30
             ring-1 ring-cyan-100/70 dark:ring-cyan-700/40
             transition-transform duration-300 group-hover:scale-110"
    >
      <Icon :name="f.icon" class="h-7 w-7 text-cyan-600 dark:text-cyan-300" />
    </div>

    <div>
      <h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
        {{ f.title }}
      </h3>
      <p class="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
        {{ f.desc }}
      </p>
    </div>
  </li>
</ul>

  </div>
</section>


    <!-- Steps -->
    <Steps />

    <!-- Screenshots -->
    <ScreenshotGrid />
  </div>
</template>
