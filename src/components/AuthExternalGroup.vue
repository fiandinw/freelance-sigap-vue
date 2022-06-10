<script setup>
  import iconFacebook from "../assets/icons/facebook.png";
  import iconGoogle from "../assets/icons/google.png";
  import LoginWith from "./LoginWith.vue";
</script>

<template>
  <LoginWith :icon="iconFacebook" title="Lanjutkan dengan Facebook" />
  <LoginWith :icon="iconGoogle" title="Lanjutkan dengan Google" />
  <div class="divider flex flex-row items-center w-full my-2">
    <hr class="border-[1px] grow" />
    <div class="px-4 text-sigap-gray">atau</div>
    <hr class="border-[1px] grow" />
  </div>
</template>
