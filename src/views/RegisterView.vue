<script setup>
  import AuthExternalGroup from "../components/AuthExternalGroup.vue";
  import LogoComponent from "../components/LogoComponent.vue";
  import AuthInput from "../components/AuthInput.vue";
  import { RouterLink, useRouter } from "vue-router";
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import styles from "../styles";

  const router = useRouter();

  const inputs = ref({
    email: "",
    password: "",
  });

  const handleRegister = () => {
    //console.log(inputs.value);
    createUserWithEmailAndPassword(
      getAuth(),
      inputs.value.email,
      inputs.value.password
    )
      .then(() => {
        console.log("register sukses");
        router.push({ name: "home" });
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };
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
      <input
        :class="styles.authInput"
        type="text"
        placeholder="Alamat Email"
        v-model="inputs.email"
      />
      <input
        :class="styles.authInput"
        type="password"
        placeholder="Password"
        v-model="inputs.password"
      />
      <AuthInput type="password" placeholder="Konfirmasi Password" />
      <div class="font-bold text-lg self-start">Kontak Informasi</div>
      <AuthInput type="number" placeholder="Nomor Ponsel (+62)" />
      <button
        @click="handleRegister"
        class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
      >
        Lanjut
      </button>
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
