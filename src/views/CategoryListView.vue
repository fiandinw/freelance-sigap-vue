<script setup>
  import ServiceCard from "../components/ServiceCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row items-end justify-between py-16">
      <div>
        <div class="font-lato text-4xl text-sigap-gray">Terpopuler</div>
        <div class="font-lato font-bold text-6xl">
          {Judul <span class="text-sigap-primary">Kategori</span>}
        </div>
      </div>
    </section>
    <section>control</section>
    <section class="container mt-12 flex flex-row items-center justify-between">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </section>
  </main>
</template>
