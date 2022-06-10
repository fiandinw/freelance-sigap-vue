<script setup>
  import Simple from "./Simple.vue";
  import Full from "./Full.vue";
</script>

<template>
  <nav
    v-if="$route.name === 'index'"
    class="fixed top-0 w-full z-40 flex justify-center p-12"
  >
    <Simple />
  </nav>
  <div v-if="$route.name === 'index'" class="h-24"></div>

  <nav
    v-if="!['index', 'login', 'register'].includes($route.name)"
    class="fixed top-0 w-full z-40"
  >
    <Full />
  </nav>
  <div
    v-if="!['index', 'login', 'register'].includes($route.name)"
    class="h-40"
  ></div>
</template>
