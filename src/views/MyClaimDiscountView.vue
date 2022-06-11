<script setup>
  import ServiceCard from "../components/ServiceCard.vue";
  import MyClaimTypeButton from "../components/MyClaimTypeButton.vue";
  import VoucherComponent from "../components/VoucherComponent.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section
      class="container py-16 flex flex-row items-center justify-center gap-8"
    >
      <MyClaimTypeButton />
      <MyClaimTypeButton />
      <MyClaimTypeButton />
    </section>
    <section class="container flex flex-row items-end justify-between py-16">
      <div>
        <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
        <div class="font-lato font-bold text-6xl">
          Voucher <span class="text-sigap-primary">Diskon</span>
        </div>
      </div>
    </section>
    <div class="divider border-t-[1px] border-sigap-gray my-6 container"></div>
    <section class="container mt-12 flex flex-col items-center gap-12">
      <VoucherComponent />
      <VoucherComponent />
    </section>
  </main>
</template>
