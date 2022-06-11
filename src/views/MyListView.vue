<script setup>
  import ServiceCard from "../components/ServiceCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row items-end justify-between py-16">
      <div>
        <div class="font-lato text-4xl text-sigap-gray">My List</div>
        <div class="font-lato font-bold text-6xl">
          Favorite <span class="text-sigap-primary">Services</span>
        </div>
      </div>
    </section>
    <div class="divider border-t-[1px] border-sigap-gray my-6 container"></div>
    <section class="container mt-12 flex flex-row items-center justify-between">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </section>
  </main>
</template>
