<script setup>
  import iconPencil from "../assets/icons/pencil.png";
  import iconInstant from "../assets/icons/instant.png";
  import iconFocal from "../assets/icons/focal.png";

  import sigapbotHappy from "../assets/sigapbotHappy.png";
  import sigapbotNatural from "../assets/sigapbotNatural.png";
  import sigapbotLogo from "../assets/sigapbotLogo.png";
  import LandingFeatureButton from "./LandingFeatureButton.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-row items-center justify-between">
    <RouterLink :to="{ name: 'customorder' }">
      <LandingFeatureButton
        :icon="iconPencil"
        :image="sigapbotHappy"
        title="Custom Order"
      />
    </RouterLink>
    <RouterLink :to="{ name: 'instantorder' }">
      <LandingFeatureButton
        :icon="iconInstant"
        :image="sigapbotLogo"
        title="Instant Order"
      />
    </RouterLink>
    <LandingFeatureButton
      :icon="iconFocal"
      :image="sigapbotNatural"
      title="Main Profile"
    />
  </div>
</template>
