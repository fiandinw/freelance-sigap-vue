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
      <a
        href="https://api.whatsapp.com/send?phone=6285777620414&text=Halo%2C%20Saya%20memiliki%20pertanyaan%20atau%20keluhan%20terkait%20Aglees."
        target="_blank"
      >
        <HelpCenterButton
          :icon="iconWhatsapp"
          title="Whatsapp Support Center"
        />
      </a>
      <a
        href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwRCVSLvRmMvvLdgMZLbCsDNsxFHBzdPFMwkFRPrbXRnLfqWMtbsXgzKGjMWQNgcDftZxvW"
        target="_blank"
      >
        <HelpCenterButton :icon="iconWhatsapp" title="Email Support Center"
          ><Icon class="text-white text-8xl" icon="fontisto:email"
        /></HelpCenterButton>
      </a>
    </div>
  </main>
</template>
