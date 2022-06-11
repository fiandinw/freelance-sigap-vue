<script setup>
  import { RouterLink } from "vue-router";
  import LogoComponent from "../components/LogoComponent.vue";
  import AuthInput from "../components/AuthInput.vue";
</script>
<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="card w-[465px] shadow-lg p-6 flex flex-col items-center gap-4">
      <RouterLink :to="{ name: 'index' }">
        <LogoComponent />
      </RouterLink>
      <main
        class="w-full flex flex-col items-center gap-4"
        v-if="$route.hash == ''"
      >
        <div class="font-bold text-3xl self-start">Lupa Password</div>
        <div class="text-lg">
          Tolong masukan alamat e-mail kamu. kamu akan menerima sebuat link
          untuk dapat membuat kata sandi baru
        </div>
        <AuthInput type="text" placeholder="Masukan Alamat Email" />
        <div class="text-sigap-gray text-xs text-center">
          Freelance Sigap akan mengirimkan kode verifikasi ke email anda
        </div>
        <RouterLink
          class="w-full"
          :to="{ name: 'forgot', hash: '#verifikasi' }"
        >
          <button
            class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
          >
            Kirim Kode Verifikasi
          </button>
        </RouterLink>
      </main>
      <main
        class="w-full flex flex-col items-center gap-4"
        v-if="$route.hash == '#verifikasi'"
      >
        <div class="font-bold text-3xl self-start">Kode Verifikasi</div>
        <div class="text-lg">
          Mohon input verifikasi kode yang dikirim ke alamat e-mail anda
        </div>
        <div class="flex flex-row gap-4 my-12">
          <input
            class="w-16 h-16 shadow-inner border-[1px] border-sigap-gray rounded-3xl text-center text-2xl"
            type="number"
          />
          <input
            class="w-16 h-16 shadow-inner border-[1px] border-sigap-gray rounded-3xl text-center text-2xl"
            type="number"
          />
          <input
            class="w-16 h-16 shadow-inner border-[1px] border-sigap-gray rounded-3xl text-center text-2xl"
            type="number"
          />
          <input
            class="w-16 h-16 shadow-inner border-[1px] border-sigap-gray rounded-3xl text-center text-2xl"
            type="number"
          />
        </div>
        <RouterLink class="w-full" :to="{ name: 'forgot', hash: '#ganti' }">
          <button
            class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
          >
            Lanjut
          </button>
        </RouterLink>
      </main>
      <main
        class="w-full flex flex-col items-center gap-4"
        v-if="$route.hash == '#ganti'"
      >
        <div class="font-bold text-3xl self-start">Masukan Password Baru</div>
        <AuthInput type="password" placeholder="Masukan Password Baru" />
        <AuthInput type="password" placeholder="Masukan Ulang Password Baru" />
        <RouterLink class="w-full" :to="{ name: 'login' }">
          <button
            class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
          >
            Lanjut
          </button>
        </RouterLink>
      </main>
    </div>
  </div>
</template>
