<script setup>
  import LogoComponent from "../components/LogoComponent.vue";
  import AuthInput from "../components/AuthInput.vue";
  import AuthExternalGroup from "../components/AuthExternalGroup.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="card w-[465px] shadow-lg p-6 flex flex-col items-center gap-4">
      <RouterLink :to="{ name: 'index' }">
        <LogoComponent />
      </RouterLink>
      <div class="font-bold text-3xl self-start">Masuk</div>
      <AuthExternalGroup />
      <AuthInput type="text" placeholder="Email atau Nomor Ponsel" />
      <AuthInput type="password" placeholder="Password" />
      <div class="self-end">
        <RouterLink
          :to="{ name: 'forgot' }"
          class="font-semibold text-sm text-sigap-primary"
          >Lupa Kata Sandi?</RouterLink
        >
      </div>
      <RouterLink class="w-full" :to="{ name: 'home' }">
        <button
          class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
        >
          Lanjut
        </button>
      </RouterLink>
      <div class="text-lg text-sigap-gray">
        Tidak Memiliki Akun?
        <RouterLink :to="{ name: 'register' }" class="text-sigap-primary"
          >Daftar</RouterLink
        >
      </div>
    </div>
  </div>
</template>
