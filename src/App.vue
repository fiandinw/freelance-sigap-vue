<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./components/navbar/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer
    v-if="
      !['register', 'login', 'myprofile', 'forgot', 'admin'].includes(
        $route.name
      )
    "
  />
</template>
