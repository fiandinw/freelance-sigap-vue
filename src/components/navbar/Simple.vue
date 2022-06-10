<script setup>
import { RouterLink } from "vue-router";
import LogoComponent from "../LogoComponent.vue";
</script>
<template>
  <div
    class="bg-white container flex flex-row items-center justify-between rounded-full px-4 py-2 shadow-lg"
  >
    <a href="#">
      <LogoComponent />
    </a>

    <div class="text-sm inline-flex flex-row gap-6 shrink-0">
      <div class="font-bold cursor-pointer">Beranda</div>
      <div class="cursor-pointer">Tentang</div>
      <div class="cursor-pointer">FAQ</div>
      <div class="cursor-pointer">Deskripsi</div>
      <div class="cursor-pointer">Pusat Dukungan</div>
      <div class="cursor-pointer">Syarat dan Ketentuan</div>
    </div>

    <div class="text-sm inline-flex flex-row items-center gap-4">
      <RouterLink :to="{name: 'register'}"><button class="font-semibold cursor-pointer">DAFTAR</button></RouterLink>
      <RouterLink :to="{name: 'login'}"><button class="font-bold text-white bg-sigap-primary rounded-full px-6 py-1 cursor-pointer">MASUK</button></RouterLink>
    </div>
  </div>
</template>
