<script>
import AddNewDive from "@/assets/images/AddNewDive.png";
import DiveLogList from "@/assets/images/DiveLogList.png";

</script>

<template>
  <section class="py-16">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
      <div class="relative rounded shadow overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img :src="AddNewDive" alt="App screenshot 1" class="w-full h-full object-cover" @error="e=>e.target.style.display='none'" />
      </div>
      <div class="relative rounded shadow overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img :src="DiveLogList" alt="App screenshot 2" class="w-full h-full object-cover" @error="e=>e.target.style.display='none'" />
      </div>
    </div>
  </section>
</template>
