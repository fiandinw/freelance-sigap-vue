<script setup>
  import iconFacebook from "../assets/icons/facebook.png";
  import iconGoogle from "../assets/icons/google.png";
  import LoginWith from "./LoginWith.vue";
  import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
  } from "firebase/auth";
  import { useRouter } from "vue-router";
  import swal from "sweetalert";

  const router = useRouter();
  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        swal("Login Berhasil", "Selamat Datang", "success").then(() => {
          router.push({ name: "home" });
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error.code, error.message);
        swal(error.code, error.message, "error");
      });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, provider2)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        swal("Login Berhasil", "Selamat Datang", "success").then(() => {
          router.push({ name: "home" });
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
        console.log(error.code, error.message);
        swal(error.code, error.message, "error");
      });
  };
</script>

<template>
  <LoginWith
    @click="handleFacebook"
    :icon="iconFacebook"
    title="Lanjutkan dengan Facebook"
  />
  <LoginWith
    @click="handleGoogle"
    :icon="iconGoogle"
    title="Lanjutkan dengan Google"
  />
  <div class="divider flex flex-row items-center w-full my-2">
    <hr class="border-[1px] grow" />
    <div class="px-4 text-sigap-gray">atau</div>
    <hr class="border-[1px] grow" />
  </div>
</template>
