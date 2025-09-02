<script setup>
import { ref } from "vue";
import logo from "@/assets/images/logo.png";
const logoError = ref(false);
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-8">
    <div
      class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center"
    >
      <img
        v-if="!logoError"
        :src="logo"
        alt="DiveFive logo"
        class="h-10 mb-4 md:mb-0"
        @error="logoError = true"
      />
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 mb-4 md:mb-0 text-cyan-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
      <nav class="space-x-4">
        <RouterLink to="/features" class="hover:text-white"
          >Features</RouterLink
        >
        <RouterLink to="/faq" class="hover:text-white">FAQ</RouterLink>
        <RouterLink to="/privacy" class="hover:text-white">Privacy</RouterLink>
        <RouterLink to="/press-kit" class="hover:text-white"
          >Press Kit</RouterLink
        >
      </nav>
    </div>
  </footer>
</template>
