<script setup>
  import FloatingDescriptionCard from "../components/FloatingDescriptionCard.vue";
  import iconCheckSolid from "../assets/icons/checkSolid.png";
  import FloatingPaymentCard from "../components/FloatingPaymentCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row gap-8 py-6">
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          1
        </div>
        <div>Order Detail</div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          2
        </div>
        <div class="underline">Pembayaran</div>
      </div>
    </section>

    <article class="container py-16 flex flex-row gap-8">
      <div class="w-7/12">
        <section class="">
          <div class="border-2 border-sigap-gray p-4">
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Konsep Desain</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Vector File</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Printable File</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Mockup Logo</div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-5/12 relative flex justify-center">
        <FloatingPaymentCard />
      </div>
    </article>
  </main>
</template>
