<script setup>
  import AuthExternalGroup from "../components/AuthExternalGroup.vue";
  import LogoComponent from "../components/LogoComponent.vue";
  import AuthInput from "../components/AuthInput.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-screen h-fit flex items-start py-12 justify-center">
    <div class="card w-[465px] shadow-lg p-6 flex flex-col items-center gap-4">
      <RouterLink :to="{ name: 'index' }">
        <LogoComponent />
      </RouterLink>
      <div class="font-bold text-3xl self-start">Daftar</div>
      <AuthExternalGroup />
      <div class="font-bold text-lg self-start">Informasi Akun</div>
      <AuthInput type="text" placeholder="Username" />
      <AuthInput type="text" placeholder="Nama Depan" />
      <AuthInput type="text" placeholder="Nama Belakang" />
      <AuthInput type="text" placeholder="Alamat Email" />
      <AuthInput type="password" placeholder="Password" />
      <AuthInput type="password" placeholder="Konfirmasi Password" />
      <div class="font-bold text-lg self-start">Kontak Informasi</div>
      <AuthInput type="number" placeholder="Nomor Ponsel (+62)" />
      <RouterLink class="w-full" :to="{ name: 'login' }">
        <button
          class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
        >
          Lanjut
        </button>
      </RouterLink>
      <div class="text-lg text-sigap-gray">
        Sudah Memiliki Akun?
        <RouterLink class="text-sigap-primary" :to="{ name: 'login' }"
          >Masuk</RouterLink
        >
      </div>
      <div class="text-sm text-center">
        Dengan masuk atau mendaftar, anda menyetujui Syarat dan Ketentuan serta
        Kebijakan Privasi
      </div>
    </div>
  </div>
</template>
