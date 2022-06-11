<script setup>
  defineProps(["icon"]);
</script>
<template>
  <button
    class="w-44 h-44 border-2 border-sigap-primary text-sigap-primary rounded-2xl hover:bg-sigap-primary hover:text-white"
  >
    <i :class="icon" aria-hidden="true"></i>
    <div class="mt-2 text-lg">asd</div>
  </button>
</template>
