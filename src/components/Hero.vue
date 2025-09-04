<script>
import DiveDetail from "@/assets/images/DiveDetail.png";

</script>

<template>
  <section class="relative text-white text-center py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-cyan-900 to-cyan-600"></div>
    <img :src="DiveDetail" alt="Diving" class="absolute inset-0 w-full h-full object-cover opacity-40" @error="e=>e.target.style.display='none'" />
    <div class="relative z-10 max-w-2xl mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">DiveFive — your smart dive log</h1>
      <p class="mb-6">iOS dive app that lets you record dives, import Apple Watch and UDDF data, map sites, and track stats.</p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded">Coming soon on the App Store</button>
    </div>
  </section>
</template>
