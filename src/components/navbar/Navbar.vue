<script setup>
  import Simple from "./Simple.vue";
  import Full from "./Full.vue";
  import { getAuth, onAuthStateChanged } from "@firebase/auth";
  import { ref } from "vue";

  const simpleNav = [
    "index",
    "about",
    "landingdesc",
    "supportcenter",
    "tos",
    "customorder",
    "instantorder",
  ];
  const fullNav = [
    ...simpleNav,
    "login",
    "register",
    "forgot",
    "myprofile",
    "admin",
  ];

  const auth = getAuth();

  const isLogin = ref(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      isLogin.value = true;
    } else {
    }
  });
</script>

<template>
  <nav
    v-if="simpleNav.includes($route.name)"
    class="fixed top-0 w-full z-40 flex justify-center p-12"
  >
    <Simple />
  </nav>
  <div v-if="simpleNav.includes($route.name)" class="h-24"></div>

  <nav v-if="!fullNav.includes($route.name)" class="fixed top-0 w-full z-40">
    <Full />
  </nav>
  <div v-if="!fullNav.includes($route.name)" class="h-40"></div>
</template>
