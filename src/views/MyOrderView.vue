<script setup>
  import { RouterLink } from "vue-router";
  import MyOrderStep from "../components/MyOrderStep.vue";
  import MyCustomOrder from "../components/MyCustomOrder.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div v-if="$route.hash == ''" class="mt-12 flex flex-row gap-12">
      <div
        class="text-center font-lato font-bold text-4xl border-b-4 border-sigap-primary pb-2 cursor-pointer"
      >
        My Order
      </div>
      <RouterLink :to="{ name: 'myorder', hash: '#request' }">
        <div class="text-center font-lato font-bold text-4xl cursor-pointer">
          Request Order
        </div>
      </RouterLink>
    </div>
    <div v-if="$route.hash == '#request'" class="mt-12 flex flex-row gap-12">
      <RouterLink :to="{ name: 'myorder' }">
        <div class="text-center font-lato font-bold text-4xl cursor-pointer">
          My Order
        </div>
      </RouterLink>
      <div
        class="text-center font-lato font-bold text-4xl border-b-4 border-sigap-primary pb-2 cursor-pointer"
      >
        Request Order
      </div>
    </div>
    <section v-if="$route.hash == ''" class="container py-16">
      <div class="font-semibold text-2xl mb-8">Ongoing</div>
      <div class="flex flex-row flex-wrap">
        <MyOrderStep />
        <MyOrderStep />
        <MyOrderStep />
        <MyOrderStep />
        <MyOrderStep />
        <MyOrderStep />
        <MyOrderStep />
      </div>
    </section>
    <section v-if="$route.hash == ''" class="container py-16">
      <div class="font-semibold text-2xl mb-8">History</div>
      <MyOrderStep />
    </section>

    <section
      v-if="$route.hash == '#request'"
      class="container py-16 flex flex-row items-center justify-evenly"
    >
      <div>
        <div class="font-lato font-bold text-4xl mb-4">Latest</div>
        <MyCustomOrder ispending="yes" />
      </div>
      <div>
        <div class="font-lato font-bold text-4xl mb-4">Previous</div>
        <MyCustomOrder ispending="no" />
      </div>
    </section>
  </main>
</template>
