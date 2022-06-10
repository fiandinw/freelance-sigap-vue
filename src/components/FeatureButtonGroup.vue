<script setup>
  import iconPencil from "../assets/icons/pencil.png";
  import iconInstant from "../assets/icons/instant.png";
  import iconFocal from "../assets/icons/focal.png";

  import sigapbotHappy from "../assets/sigapbotHappy.png";
  import sigapbotNatural from "../assets/sigapbotNatural.png";
  import sigapbotLogo from "../assets/sigapbotLogo.png";
  import LandingFeatureButton from "./LandingFeatureButton.vue";
</script>

<template>
  <div class="flex flex-row items-center justify-between">
    <LandingFeatureButton
      :icon="iconPencil"
      :image="sigapbotHappy"
      title="Custom Order"
    />
    <LandingFeatureButton
      :icon="iconInstant"
      :image="sigapbotLogo"
      title="Instant Order"
    />
    <LandingFeatureButton
      :icon="iconFocal"
      :image="sigapbotNatural"
      title="Main Profile"
    />
  </div>
</template>
