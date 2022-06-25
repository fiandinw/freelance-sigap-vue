<script setup>
  import { RouterLink } from "vue-router";
  import LogoComponent from "../LogoComponent.vue";
</script>
<template>
  <div
    class="bg-white container flex flex-row items-center justify-between rounded-full px-4 py-2 shadow-lg"
  >
    <RouterLink class="ml-2" :to="{ name: 'index' }">
      <LogoComponent />
    </RouterLink>

    <div class="text-sm inline-flex flex-row gap-6 shrink-0">
      <RouterLink :to="{ name: 'home' }">
        <div class="font-bold cursor-pointer">Beranda</div>
      </RouterLink>
      <RouterLink :to="{ name: 'about' }">
        <div class="cursor-pointer">Tentang</div>
      </RouterLink>
      <RouterLink v-if="$route.name != 'index'" :to="{ name: 'index' }">
        <div class="cursor-pointer">FAQ</div>
      </RouterLink>
      <a v-if="$route.name == 'index'" href="#faq" class="cursor-pointer"
        >FAQ</a
      >
      <RouterLink :to="{ name: 'landingdesc' }">
        <div class="cursor-pointer">Deskripsi</div>
      </RouterLink>
      <RouterLink :to="{ name: 'supportcenter' }">
        <div class="cursor-pointer">Pusat Dukungan</div>
      </RouterLink>
      <RouterLink :to="{ name: 'tos' }">
        <div class="cursor-pointer">Syarat dan Ketentuan</div>
      </RouterLink>
    </div>

    <div class="text-sm inline-flex flex-row items-center gap-4">
      <RouterLink :to="{ name: 'register' }"
        ><button class="font-semibold cursor-pointer">
          DAFTAR
        </button></RouterLink
      >
      <RouterLink :to="{ name: 'login' }"
        ><button
          class="font-bold text-white bg-sigap-primary rounded-full px-6 py-1 cursor-pointer"
        >
          MASUK
        </button></RouterLink
      >
    </div>
  </div>
</template>
