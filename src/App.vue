<script setup>
// nada especial aquí, solo se importa RouterView de forma global
</script>

<template>
  <div class="flex flex-col min-h-screen text-gray-800">
    <!-- Header simple -->
    <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
      <RouterLink to="/" class="font-bold text-lg text-cyan-600">DiveFive</RouterLink>
      <nav class="space-x-4">
        <RouterLink to="/features" class="hover:text-cyan-600">Features</RouterLink>
        <RouterLink to="/faq" class="hover:text-cyan-600">FAQ</RouterLink>
        <RouterLink to="/privacy" class="hover:text-cyan-600">Privacy</RouterLink>
        <RouterLink to="/press-kit" class="hover:text-cyan-600">Press Kit</RouterLink>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main class="flex-1">
      <!-- Aquí se cargan las páginas según la ruta -->
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-6">
      <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
        <p class="mb-4 md:mb-0">© 2025 DiveFive</p>
        <nav class="space-x-4">
          <RouterLink to="/features" class="hover:text-white">Features</RouterLink>
          <RouterLink to="/faq" class="hover:text-white">FAQ</RouterLink>
          <RouterLink to="/privacy" class="hover:text-white">Privacy</RouterLink>
          <RouterLink to="/press-kit" class="hover:text-white">Press Kit</RouterLink>
        </nav>
      </div>
    </footer>
  </div>
</template>


<style>
/* Puedes añadir estilos globales aquí si lo necesitas */
</style>
