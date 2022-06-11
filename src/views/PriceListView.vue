<script setup>
  import { RouterLink } from "vue-router";
  import ServiceCard from "../components/ServiceCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container py-16 flex flex-row gap-8">
      <div
        class="w-3/12 aspect-square shadow-lg flex flex-col items-center justify-between p-8"
      >
        <div class="font-lato font-medium text-4xl">Hi {user}</div>
        <div class="text-lg">
          Buat custom order dan Dapatkan penawaran dari penjual untuk proyek
          Anda
        </div>
        <button
          class="font-semibold text-2xl w-full py-4 bg-sigap-primary text-white rounded-full"
        >
          Custom Order
        </button>
      </div>
      <div class="grow flex items-center justify-center">promo banner</div>
    </section>

    <section class="container py-16">
      <div class="flex flex-row items-end justify-between">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">Terpopuler</div>
          <div class="font-lato font-bold text-6xl">
            {Judul <span class="text-sigap-primary">Kategori</span>}
          </div>
        </div>
        <RouterLink :to="{ name: 'categorylist' }">
          <div class="flex flex-row items-center gap-8">
            <div class="text-2xl text-sigap-primary">Lihat semua</div>
            <div class="w-[60px] h-[60px] rounded-[100%] bg-sigap-primary">
              arrow right
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="mt-12 flex flex-row items-center justify-between">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  </main>
</template>
