<script setup>
  import HelpCenterButton from "../components/HelpCenterButton.vue";
  import iconWhatsapp from "../assets/icons/whatsapp.png";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-4xl mb-12">
      Pusat Dukugan
    </div>
    <div>
      <HelpCenterButton :icon="iconWhatsapp" title="Whatsapp Support Center" />
    </div>
  </main>
</template>
