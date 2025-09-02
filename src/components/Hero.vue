<script>
import DiveDetail from "@/assets/images/DiveDetail.png";

</script>

<template>
  <section class="relative text-white text-center py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-cyan-900 to-cyan-600"></div>
    <img :src="DiveDetail" alt="Buceo" class="absolute inset-0 w-full h-full object-cover opacity-40" @error="e=>e.target.style.display='none'" />
    <div class="relative z-10 max-w-2xl mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">DiveFive — tu bitácora de buceo inteligente</h1>
      <p class="mb-6">App de buceo para iOS que permite registrar inmersiones, importar datos de Apple Watch y UDDF, mapear sitios y obtener estadísticas.</p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded">Próximamente en App Store</button>
    </div>
  </section>
</template>
