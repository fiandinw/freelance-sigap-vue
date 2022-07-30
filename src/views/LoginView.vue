<script setup>
  import LogoComponent from "../components/LogoComponent.vue";
  import AuthInput from "../components/AuthInput.vue";
  import AuthExternalGroup from "../components/AuthExternalGroup.vue";
  import { RouterLink, useRouter } from "vue-router";
  import styles from "../styles";
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import swal from "sweetalert";

  const router = useRouter();

  const inputs = ref({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    //console.log(inputs.value);
    signInWithEmailAndPassword(
      getAuth(),
      inputs.value.email,
      inputs.value.password
    )
      .then(() => {
        swal("Login Berhasil", "Selamat Datang", "success").then(() => {
          router.push({ name: "home" });
        });
      })
      .catch((err) => {
        console.log(err.code, err.message);
        swal(err.code, err.message, "error");
      });
  };
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="card w-[465px] shadow-lg p-6 flex flex-col items-center gap-4">
      <RouterLink :to="{ name: 'index' }">
        <LogoComponent />
      </RouterLink>
      <div class="font-bold text-3xl self-start">Masuk</div>
      <AuthExternalGroup />
      <form
        @submit.prevent="handleLogin"
        class="flex flex-col items-center gap-4 w-full"
      >
        <input
          :class="styles.authInput"
          type="text"
          placeholder="Email atau Nomor Ponsel"
          v-model="inputs.email"
          required
        />
        <input
          :class="styles.authInput"
          type="password"
          placeholder="Password"
          v-model="inputs.password"
          required
        />
        <div class="self-end">
          <RouterLink
            :to="{ name: 'forgot' }"
            class="font-semibold text-sm text-sigap-primary"
            >Lupa Kata Sandi?</RouterLink
          >
        </div>
        <button
          type="submit"
          class="px-6 py-3 bg-sigap-primary rounded-full w-full text-white font-semibold text-2xl"
        >
          Lanjut
        </button>
      </form>
      <div class="text-lg text-sigap-gray">
        Tidak Memiliki Akun?
        <RouterLink :to="{ name: 'register' }" class="text-sigap-primary"
          >Daftar</RouterLink
        >
      </div>
    </div>
  </div>
</template>
