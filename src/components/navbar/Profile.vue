<script setup>
  import { RouterLink } from "vue-router";
  import LogoComponent from "../LogoComponent.vue";
</script>
<template>
  <nav
    class="relative w-3/12 min-h-screen bg-white p-8 shadow-[0_9px_20px_0px_rgba(0,0,0,0.3)]"
  >
    <RouterLink :to="{ name: 'home' }">
      <LogoComponent />
    </RouterLink>
    <div class="mt-12"></div>
    <RouterLink :to="{ name: 'myprofile' }">
      <button
        :class="
          $route.hash == ''
            ? 'w-full rounded-lg text-left bg-sigap-primary text-white p-2'
            : 'w-full rounded-lg text-left bg-white text-black p-2'
        "
      >
        Profile
      </button>
    </RouterLink>
    <RouterLink :to="{ name: 'myprofile', hash: '#help' }">
      <button
        :class="
          $route.hash == '#help'
            ? 'w-full rounded-lg text-left bg-sigap-primary text-white p-2'
            : 'w-full rounded-lg text-left bg-white text-black p-2'
        "
      >
        Pusat Bantuan
      </button>
    </RouterLink>
    <RouterLink :to="{ name: 'myprofile', hash: '#faq' }">
      <button
        :class="
          $route.hash == '#faq'
            ? 'w-full rounded-lg text-left bg-sigap-primary text-white p-2'
            : 'w-full rounded-lg text-left bg-white text-black p-2'
        "
      >
        FAQ
      </button>
    </RouterLink>
    <RouterLink :to="{ name: 'index' }">
      <div
        class="cursor-pointer absolute bottom-0 right-0 m-8 font-semibold text-2xl"
      >
        Keluar&nbsp;<i class="fa fa-power-off fa-lg" aria-hidden="true"></i>
      </div>
    </RouterLink>
  </nav>
</template>
