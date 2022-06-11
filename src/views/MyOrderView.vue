<script setup>
  import MyOrderStep from "../components/MyOrderStep.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="mt-12 flex flex-row gap-12">
      <div class="text-center font-lato font-bold text-4xl cursor-pointer">
        My Order
      </div>
      <div class="text-center font-lato font-bold text-4xl cursor-pointer">
        Request Order
      </div>
    </div>
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
