<script setup>
  import HelpCenterButton from "../components/HelpCenterButton.vue";
  import iconWhatsapp from "../assets/icons/whatsapp.png";
  import { Icon } from "@iconify/vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-4xl mb-12">
      Pusat Dukugan
    </div>
    <div class="flex flex-row gap-8">
      <HelpCenterButton :icon="iconWhatsapp" title="Whatsapp Support Center" />
      <HelpCenterButton :icon="iconWhatsapp" title="Email Support Center"
        ><Icon class="text-white text-8xl" icon="fontisto:email"
      /></HelpCenterButton>
    </div>
  </main>
</template>
