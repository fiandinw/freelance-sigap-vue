<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./components/navbar/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer v-if="!['register', 'login'].includes($route.name)" />
</template>
