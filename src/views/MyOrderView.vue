<script setup>
  import MyOrderStep from "../components/MyOrderStep.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-4xl">My Order</div>
    <section class="container py-16">
      <div class="font-semibold text-2xl mb-8">Ongoing</div>
      <MyOrderStep />
    </section>
    <section class="container py-16">
      <div class="font-semibold text-2xl mb-8">Previous</div>
      <MyOrderStep />
    </section>
  </main>
</template>
